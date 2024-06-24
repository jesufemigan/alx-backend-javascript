export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const string of array) {
    newArr.push(appendString + string);
  }

  return newArr;
}
