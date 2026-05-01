export function formatPrice(value?: number | null) {
  if (value === undefined || value === null) return null;
  return `${value},-`;
}
