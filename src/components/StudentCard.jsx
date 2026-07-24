import Card from "./Card";

function StudentCard({
  student,
  onDeleteStudent,
  onEditStudent,
  onViewStudent
}) {
  return (
    <Card>
      <div
        className="student-card"
        onClick={() => onViewStudent(student)}
      >
        <h2>{student.name}</h2>

        <p>Course: {student.course}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onEditStudent(student);
          }}
        >
          Edit
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDeleteStudent(student.id);
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default StudentCard;