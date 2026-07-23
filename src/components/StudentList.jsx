import StudentCard from "./StudentCard";

function StudentList({
  students,
  onDeleteStudent,
  onEditStudent,
  onViewStudent
}) {

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDeleteStudent={onDeleteStudent}
          onEditStudent={onEditStudent}
          onViewStudent={onViewStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;