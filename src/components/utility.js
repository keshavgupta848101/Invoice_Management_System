export const setDecimalPlaces = (value = 0, point = 2) => {
  return value
    .toString()
    .split(".")
    .map((el, i) => (i ? el.split("").slice(0, point).join("") : el))
    .join(".");
};
