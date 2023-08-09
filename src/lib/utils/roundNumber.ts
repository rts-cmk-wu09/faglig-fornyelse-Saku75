export function roundNumber(
  num: number,
  options?: { direction?: "up" | "down" | "auto"; precision?: number }
) {
  const { direction = "auto", precision = 0 } = options || {};

  const round =
    direction === "auto"
      ? Math.round
      : direction === "up"
      ? Math.ceil
      : Math.floor;

  const multiplier = Math.pow(10, precision);

  return round(num * multiplier) / multiplier;
}
