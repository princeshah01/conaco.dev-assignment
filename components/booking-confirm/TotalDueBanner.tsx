import { Text, View } from "react-native";
import { formatCurrency } from "./utils";

const INK_BACKGROUND = "#1A1A2E";
const BALANCE_BACKGROUND = "rgba(232, 54, 93, 0.2)";
const BALANCE_LABEL_COLOR = "#f9c9d6";

type TotalDueBannerProps = {
  totalDue: number;
  balanceDue: number;
  paid: number;
};

export function TotalDueBanner({
  totalDue,
  balanceDue,
  paid,
}: TotalDueBannerProps) {
  const note =
    balanceDue === 0
      ? "Fully paid"
      : paid > 0
        ? `${formatCurrency(paid)} received - ${formatCurrency(balanceDue)} pending`
        : "Full amount pending";

  return (
    <View
      className="mx-4 mt-3 flex-row items-center justify-between gap-3 rounded-[18px] bg-ink px-5 py-4"
      style={{ backgroundColor: INK_BACKGROUND }}
    >
      <View className="flex-1">
        <Text className="font-sans text-[11px] font-bold uppercase tracking-[1px] text-white/50">
          Total due
        </Text>
        <Text className="mt-1 font-serif text-[28px] font-semibold text-white">
          {formatCurrency(totalDue)}
        </Text>
        <Text
          className={`mt-1 font-sans text-[11px] ${
            balanceDue === 0 ? "text-success" : "text-white/45"
          }`}
        >
          {note}
        </Text>
      </View>

      <View
        className="rounded-[10px] border border-primary/30 bg-primary/20 px-4 py-2"
        style={{ backgroundColor: BALANCE_BACKGROUND }}
      >
        <Text
          className="text-center font-sans text-[10px] font-bold uppercase tracking-wide"
          style={{ color: BALANCE_LABEL_COLOR }}
        >
          Balance
        </Text>
        <Text className="mt-0.5 text-center font-sans text-[15px] font-semibold text-primary">
          {formatCurrency(balanceDue)}
        </Text>
      </View>
    </View>
  );
}
