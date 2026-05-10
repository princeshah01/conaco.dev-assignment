import { CardIcon, GSTIcon, GiftIcon, WalletIcon } from "@/components/icons";
import { useState, type ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";
import { subtotal } from "./constants";
import { IconBadge } from "./IconBadge";
import { PaymentModeTabs } from "./PaymentModeTabs";
import type { PaymentMode } from "./types";
import { formatCurrency } from "./utils";

const styles = StyleSheet.create({
  inputFocused: {
    shadowColor: "#E8365D",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
});

const inputBaseStyle =
  Platform.OS === "web"
    ? ({
        outlineStyle: "none",
      } as unknown as TextInputProps["style"])
    : undefined;
const inputFocusedStyle =
  Platform.OS === "web"
    ? ({
        boxShadow: "0 0 0 1px rgba(232, 54, 93, 0.12)",
      } as unknown as TextInputProps["style"])
    : styles.inputFocused;

type InputRowProps = {
  icon: ReactNode;
  iconClassName: string;
  label: string;
  sublabel: string;
  value: string;
  placeholder: string;
  widthClass: string;
  min?: number;
  max?: number;
  onChangeText: (value: string) => void;
};

function clampValue(value: number, min?: number, max?: number) {
  const withMin = min === undefined ? value : Math.max(min, value);
  return max === undefined ? withMin : Math.min(max, withMin);
}

function formatInputNumber(value: number) {
  return Number.isInteger(value)
    ? String(value)
    : String(Number(value.toFixed(2)));
}

function normalizeNumericInput(value: string, min?: number, max?: number) {
  if (value === "") {
    return "";
  }

  if (!/^\d*\.?\d*$/.test(value)) {
    return null;
  }

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  return formatInputNumber(clampValue(numericValue, min, max));
}

function handleNumericInput(
  value: string,
  onChange: (value: string) => void,
  min?: number,
  max?: number,
) {
  const normalizedValue = normalizeNumericInput(value, min, max);

  if (normalizedValue !== null) {
    onChange(normalizedValue);
  }
}

function InputRow({
  icon,
  iconClassName,
  label,
  sublabel,
  value,
  placeholder,
  widthClass,
  min = 0,
  max,
  onChangeText,
}: InputRowProps) {
  const [focused, setFocused] = useState(false);
  const webNumberInputProps =
    Platform.OS === "web"
      ? ({
          max,
          min,
          type: "number",
        } as unknown as TextInputProps)
      : {};

  return (
    <View className="flex-row items-center justify-between gap-3 border-b border-border/5 px-[18px] py-[13px]">
      <View className="flex-1 flex-row items-center gap-3">
        <IconBadge className={iconClassName}>{icon}</IconBadge>

        <View className="flex-1">
          <Text className="font-sans text-[13px] text-secondary-foreground">
            {label}
          </Text>
          <Text className="mt-0.5 font-sans text-[11px] text-muted-foreground">
            {sublabel}
          </Text>
        </View>
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        keyboardType="numeric"
        inputMode="numeric"
        {...webNumberInputProps}
        className={`${widthClass} h-[38px] flex-row overflow-hidden rounded-[10px] border ${
          focused
            ? "border-rose bg-rose-light"
            : "border-border/10 bg-secondary"
        } px-3 text-right font-sans text-sm font-semibold text-foreground`}
        placeholderTextColor="#9898b0"
        style={[inputBaseStyle, focused ? inputFocusedStyle : undefined]}
      />
    </View>
  );
}

type AdjustmentFieldsCardProps = {
  gst: string;
  discount: string;
  paid: string;
  paymentMode: PaymentMode;
  gstAmount: number;
  totalDue: number;
  onGstChange: (value: string) => void;
  onDiscountChange: (value: string) => void;
  onPaidChange: (value: string) => void;
  onPaymentModeChange: (value: PaymentMode) => void;
};

export function AdjustmentFieldsCard(props: AdjustmentFieldsCardProps) {
  const discountValue = Number(props.discount) || 0;
  const gstPct = Number(props.gst) || 0;
  const afterGst = subtotal + props.gstAmount;
  const discountSavingPct =
    afterGst > 0 ? ((discountValue / afterGst) * 100).toFixed(1) : "0.0";

  return (
    <View className="mx-4 mt-3 overflow-hidden rounded-[18px] border border-border/10 bg-card">
      <InputRow
        icon={<GSTIcon size={16} color="#F59B00" strokeWidth={1.9} />}
        iconClassName="bg-warning/10"
        label="GST"
        sublabel={
          gstPct > 0
            ? `${formatCurrency(props.gstAmount)} (${gstPct}% on ${formatCurrency(subtotal)})`
            : `${formatCurrency(0)} on ${formatCurrency(subtotal)}`
        }
        value={props.gst}
        placeholder="%"
        widthClass="w-20"
        max={100}
        onChangeText={(value) =>
          handleNumericInput(value, props.onGstChange, 0, 100)
        }
      />

      <InputRow
        icon={<GiftIcon size={16} color="#E8365D" strokeWidth={1.9} />}
        iconClassName="bg-primary/10"
        label="Discount"
        sublabel={
          discountValue > 0
            ? `${formatCurrency(discountValue)} off - saving ${discountSavingPct}%`
            : "No discount applied"
        }
        value={props.discount}
        placeholder={formatCurrency(0)}
        widthClass="w-28"
        onChangeText={(value) =>
          handleNumericInput(value, props.onDiscountChange, 0)
        }
      />

      <InputRow
        icon={<WalletIcon size={16} color="#1DAA6B" strokeWidth={1.9} />}
        iconClassName="bg-success/10"
        label="Amount paid"
        sublabel={`Balance: ${formatCurrency(props.totalDue - (Number(props.paid) || 0))}`}
        value={props.paid}
        placeholder={formatCurrency(0)}
        widthClass="w-28"
        onChangeText={(value) =>
          handleNumericInput(value, props.onPaidChange, 0)
        }
      />

      <View className="gap-3 px-[18px] py-[13px]">
        <View className="flex-row items-center gap-3">
          <IconBadge className="bg-info/10">
            <CardIcon size={16} color="#1A73E8" strokeWidth={1.9} />
          </IconBadge>
          <Text className="font-sans text-[13px] text-secondary-foreground">
            Payment mode
          </Text>
        </View>

        <PaymentModeTabs
          value={props.paymentMode}
          onChange={props.onPaymentModeChange}
        />
      </View>
    </View>
  );
}
