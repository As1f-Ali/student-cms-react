import StudentCard from "./StudentCard";

function StudentList({
  students,
  onDeleteStudent,
  onEditStudent
}) {

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDeleteStudent={onDeleteStudent}
          onEditStudent={onEditStudent}
        />
      ))}
    </>
  );
}

export default StudentList;