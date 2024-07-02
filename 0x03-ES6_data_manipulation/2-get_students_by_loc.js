export default function getStudentsByLocation(arr, str) {
  return arr.filter((item) => item.location === str);
}
