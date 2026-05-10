import { HomeIcon, StarIcon } from "@/components/icons";
import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { servicesCost, subtotal, venueCost } from "./constants";
import { IconBadge } from "./IconBadge";
import { formatCurrency } from "./utils";

type CostRowProps = {
  icon: ReactNode;
  iconClassName: string;
  label: string;
  sublabel: string;
  value: string;
};

function CostRow({
  icon,
  iconClassName,
  label,
  sublabel,
  value,
}: CostRowProps) {
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

      <Text className="font-sans text-sm font-semibold text-foreground">
        {value}
      </Text>
    </View>
  );
}

export function CostBreakdownCard() {
  return (
    <View className="mx-4 overflow-hidden rounded-[18px] border border-border/10 bg-card">
      <CostRow
        icon={<HomeIcon size={16} color="#1A73E8" strokeWidth={1.9} />}
        iconClassName="bg-info/10"
        label="Venue cost"
        sublabel="DGB Convention Hall"
        value={formatCurrency(venueCost)}
      />

      <CostRow
        icon={<StarIcon size={16} color="#1DAA6B" strokeWidth={1.9} />}
        iconClassName="bg-success/10"
        label="Services cost"
        sublabel="Add-ons & extras"
        value={formatCurrency(servicesCost)}
      />

      <View className="flex-row items-center justify-between bg-secondary px-[18px] py-4">
        <Text className="font-sans text-[13px] font-semibold text-foreground">
          Subtotal
        </Text>
        <Text
          className="font-serif text-xl font-semibold text-foreground"
        >
          {formatCurrency(subtotal)}
        </Text>
      </View>
    </View>
  );
}
