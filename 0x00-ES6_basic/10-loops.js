export default function appendToEachArrayValue(array, appendString) {
  let newValue = [];
  for (let value of array) {
    newValue.push(appendString + value);
  }

  return newValue;
}
