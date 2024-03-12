export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceriesMap.forEach((quantity, item) => {
    // if quantity is 1, update the quantity to 100
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  });
  return groceriesMap;
}
