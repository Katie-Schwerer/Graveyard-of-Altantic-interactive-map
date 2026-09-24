export function getShipWreckYear(date) {
  const dateOfShipWreck = new Date(date);
  return dateOfShipWreck.getFullYear();
};

export function getShipwreckDate(date) {
  const dateOfWreck = new Date(date);
  return dateOfWreck.toLocaleDateString();
};

export function getMinYear(list1, list2) {
  let list = [...list1, ...list2]
  let dates = new Set(list.map((d) => new Date(d.sunk)).filter(year => !isNaN(year)));
  let year = new Date(Math.min(...dates));
  return year.getFullYear();
}

export function getMaxYear(list1, list2) {
  let list = [...list1, ...list2]
  let dates = [...new Set(list.map((d) => new Date(d.sunk)).filter(year => !isNaN(year)))];
  let year = new Date(Math.max(...dates));
  return year.getFullYear();
}
