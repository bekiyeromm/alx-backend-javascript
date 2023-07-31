export default function getStudentsByLocation(stud, address) {
  return stud.filter((student) => student.location === address);
}
