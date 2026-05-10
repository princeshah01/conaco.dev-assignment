export type PaymentMode = "Cash" | "Card" | "UPI" | "Bank";

export type BookingTotals = {
  gstAmount: number;
  totalDue: number;
  balanceDue: number;
};
