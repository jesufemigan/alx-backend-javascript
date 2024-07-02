export default function getStudentIdsSum(arr) {
  return arr.reduce((prev, nxt) => prev + nxt.id, 0);
}
