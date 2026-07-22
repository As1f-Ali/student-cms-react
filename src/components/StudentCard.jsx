function StudentCard( {student } ) {
    return (
        <div className="student-card">
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
            <p>Enrollment Year: {student.enrollmentYear}</p>
            <p>GPA: {student.gpa}</p>
        </div> 
    )
}

export default StudentCard;