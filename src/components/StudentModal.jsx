function StudentModal({ student, onClose }) {
  if (!student) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>{student.name}</h2>

        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Enrollment Year:</strong> {student.enrollmentYear}</p>
        <p><strong>GPA:</strong> {student.gpa}</p>

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default StudentModal;