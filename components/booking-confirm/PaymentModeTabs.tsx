import { CardIcon, CashIcon, HomeIcon, UPIcon } from "@/components/icons";
import { Pressable, Text, View } from "react-native";
import { paymentModes } from "./constants";
import type { PaymentMode } from "./types";

function PaymentModeIcon({
  mode,
  active,
}: {
  mode: PaymentMode;
  active: boolean;
}) {
  const props = { size: 13, color: active ? "#E8365D" : "#9898b0" };

  if (mode === "Cash") {
    return <CashIcon {...props} />;
  }

  if (mode === "Card") {
    return <CardIcon {...props} />;
  }

  if (mode === "UPI") {
    return <UPIcon {...props} />;
  }

  return <HomeIcon {...props} />;
}

type PaymentModeTabsProps = {
  value: PaymentMode;
  onChange: (value: PaymentMode) => void;
};

export function PaymentModeTabs({ value, onChange }: PaymentModeTabsProps) {
  return (
    <View className="flex-row gap-1.5">
      {paymentModes.map((mode) => {
        const active = value === mode;

        return (
          <Pressable
            key={mode}
            onPress={() => onChange(mode)}
            className={`h-9 flex-1 flex-row items-center justify-center gap-1 rounded-[10px] border ${
              active
                ? "border-primary/40 bg-accent"
                : "border-border/10 bg-secondary"
            }`}
          >
            <PaymentModeIcon active={active} mode={mode} />

            <Text
              className={`font-sans text-xs font-medium ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {mode}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
