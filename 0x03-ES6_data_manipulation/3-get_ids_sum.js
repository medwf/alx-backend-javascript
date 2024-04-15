export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, currentid) => accumulator + currentid.id, 0,
    );
  }

  return 0;
}
