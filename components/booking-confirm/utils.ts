export function formatCurrency(value: number) {
  return `\u20B9${Math.round(value).toLocaleString("en-IN")}`;
}
