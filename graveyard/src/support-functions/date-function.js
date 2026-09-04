export function getShipWreckYear(date) {
  const dateOfShipWreck = new Date(date);
  return dateOfShipWreck.getFullYear();
};

export function getShipwreckDate(date) {
  const dateOfWreck = new Date(date);
  return dateOfWreck.toLocaleDateString();
};

export function getMinYear(list) {
  let dates = new Set(list.map((d) => new Date(d.sunk)).filter(year => !isNaN(year)));
  let year = new Date(Math.min(...dates));
  return year.getFullYear();
}

export function getMaxYear(list) {
  let dates = [...new Set(list.map((d) => new Date(d.sunk)).filter(year => !isNaN(year)))];
  console.log(dates);
  let year = new Date(Math.max(...dates));
  console.log(year)
  return year.getFullYear();
}
