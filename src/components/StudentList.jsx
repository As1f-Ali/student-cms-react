import StudentCard from "./StudentCard";

function StudentList({ students }) {
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