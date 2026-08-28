export function getShipWreckYear(date) {
  const dateOfShipWreck = new Date(date);
  return dateOfShipWreck.getFullYear();
};

export function getShipwreckDate(date) {
  const dateOfWreck = new Date(date);
  return dateOfWreck.toLocaleDateString();
};
