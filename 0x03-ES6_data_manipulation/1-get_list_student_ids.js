export default function getListStudentsId(arr) {
  if (Array.isArray(arr)) {
    return arr.map((item) => item.id);
  }
  return [];
}
