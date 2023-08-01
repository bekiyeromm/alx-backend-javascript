export default function hasValuesFromArray(set, array) {
  return array.every((member) => set.has(member));
}
