export const subtotal = 277000;
export const venueCost = 225000;
export const servicesCost = 52000;

export const bookingSteps = [
  { label: "Event", status: "done" },
  { label: "Venue", status: "done" },
  { label: "Date & Time", status: "done" },
  { label: "Confirm", status: "active" },
] as const;

export const paymentModes = ["Cash", "Card", "UPI", "Bank"] as const;
