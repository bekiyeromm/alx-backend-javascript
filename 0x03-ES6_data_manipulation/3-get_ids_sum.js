export default function getStudentIdsSum(student) {
  const sumOfId = student.reduce((Accumulator, student) => Accumulator + student.id, 0);
  return sumOfId;
}
