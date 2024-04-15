export default function getStudentsByLocation(listStudents, city) {
  if (listStudents instanceof Array) {
    return listStudents.filter(
      (obj) => obj.location === city,
    );
  }

  return [];
}
