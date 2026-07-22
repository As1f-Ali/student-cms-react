import StudentCard from "./StudentCard";

function StudentList({ students }) {

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </>
  );
}

export default StudentList;