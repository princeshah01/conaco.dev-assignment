import { useMemo, useState } from "react";
import { View } from "react-native";
import { AdjustmentFieldsCard } from "./AdjustmentFieldsCard";
import { CostBreakdownCard } from "./CostBreakdownCard";
import { HeroCard } from "./HeroCard";
import { SectionTitle } from "./SectionTitle";
import { StepHeader } from "./StepHeader";
import { TotalDueBanner } from "./TotalDueBanner";
import { subtotal } from "./constants";
import type { BookingTotals, PaymentMode } from "./types";

type ConfirmBookingContentProps = {
  onClose: () => void;
};

export function ConfirmBookingContent({ onClose }: ConfirmBookingContentProps) {
  const [gst, setGst] = useState("0");
  const [discount, setDiscount] = useState("5");
  const [paid, setPaid] = useState("0");
  const [paymentMode, setPaymentMode] = useState<PaymentMode>("Bank");

  const gstPct = Number(gst) || 0;
  const discountValue = Number(discount) || 0;
  const paidValue = Number(paid) || 0;

  const values = useMemo<BookingTotals>(() => {
    const gstAmount = (subtotal * gstPct) / 100;
    const afterGST = subtotal + gstAmount;
    const totalDue = Math.max(0, afterGST - discountValue);
    const balanceDue = Math.max(0, totalDue - paidValue);

    return { gstAmount, totalDue, balanceDue };
  }, [gstPct, discountValue, paidValue]);

  return (
    <View className="bg-background pb-28">
      <StepHeader onClose={onClose} />
      <HeroCard />

      <SectionTitle>Payment breakdown</SectionTitle>
      <CostBreakdownCard />

      <SectionTitle>Adjustments</SectionTitle>
      <AdjustmentFieldsCard
        gst={gst}
        discount={discount}
        paid={paid}
        paymentMode={paymentMode}
        gstAmount={values.gstAmount}
        totalDue={values.totalDue}
        onGstChange={setGst}
        onDiscountChange={setDiscount}
        onPaidChange={setPaid}
        onPaymentModeChange={setPaymentMode}
      />

      <TotalDueBanner
        totalDue={values.totalDue}
        balanceDue={values.balanceDue}
        paid={paidValue}
      />

      <View className="h-4" />
    </View>
  );
}
