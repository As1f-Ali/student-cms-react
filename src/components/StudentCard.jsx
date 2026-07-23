function StudentCard({ student, onDeleteStudent, onEditStudent }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <p>Age: {student.age}</p>

      <p>Email: {student.email}</p>

      <p>Course: {student.course}</p>

      <p>Enrollment Year: {student.enrollmentYear}</p>

      <p>GPA: {student.gpa}</p>

      <button onClick={() => onEditStudent(student)}>
        Edit
      </button>

      <button onClick={() => onDeleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;