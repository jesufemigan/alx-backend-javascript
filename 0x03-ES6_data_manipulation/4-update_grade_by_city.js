export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredByLocation = arr.filter((item) => item.location === city);
  const newArr = filteredByLocation.map((item) => ({
    ...item,
    grade: newGrades.filter((grade) => grade.studentId === item.id).grade || 'N/A',
  }));

  return newArr;
}
