export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  for (let string of array) {
    newArr.push(appendString + string);
  }

  return newArr;
}
