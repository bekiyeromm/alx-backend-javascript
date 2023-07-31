const getListStudentIds = (arrayObj) => {
  let listOfStudId = [];
  if (!(arrayObj instanceof Array)) {
    return listOfStudId;
  }
  listOfStudId = arrayObj.map((student) => student.id);
  return listOfStudId;
};
export default getListStudentIds;
