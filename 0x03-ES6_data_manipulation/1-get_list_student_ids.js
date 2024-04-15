export default function getListStudentIds(listStudentIds) {
  const ids = [];

  if (listStudentIds instanceof Array) {
    listStudentIds.map((obj) => ids.push(obj.id));
  }
  return ids;
}
