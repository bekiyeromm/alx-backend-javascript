function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter((student) => student.location === city);

  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
export default updateStudentGradeByCity;
