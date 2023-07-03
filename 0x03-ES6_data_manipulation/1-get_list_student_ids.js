export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return []; // Return an empty array if the argument is not an array
  }

  return students.map((student) => student.id);
}
