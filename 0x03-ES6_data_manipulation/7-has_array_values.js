export default function hasValuesFromArray(setValue, arrayValue) {
  for (const value of arrayValue) {
    if (!setValue.has(value)) {
      return false;
    }
  }
  return true;
}
