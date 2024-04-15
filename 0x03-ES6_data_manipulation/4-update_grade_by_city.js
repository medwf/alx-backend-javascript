export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (getListStudents instanceof Array
    && typeof city === 'string'
    && newGrades instanceof Array
  ) {
    return getListStudents.filter(
      (obj) => obj.location === city,
    ).map(
      (obj) => ({
        id: obj.id,
        firstName: obj.firstName,
        location: obj.location,
        grade: (newGrades.filter(
          (grade) => grade.studentId === obj.id,
        ).pop(0) || { grade: 'N/A' }).grade,
      }),
    );
  }
  return [];
}
