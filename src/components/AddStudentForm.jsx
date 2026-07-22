import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    enrollmentYear: "",
    gpa: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      age: Number(formData.age),
      email: formData.email,
      course: formData.course,
      enrollmentYear: Number(formData.enrollmentYear),
      gpa: Number(formData.gpa)
    };

    onAddStudent(newStudent);

    setFormData({
      name: "",
      age: "",
      email: "",
      course: "",
      enrollmentYear: "",
      gpa: ""
    });
  }

  const isValid =
    formData.name &&
    formData.age &&
    formData.email &&
    formData.course &&
    formData.enrollmentYear &&
    formData.gpa;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
      />

      <input
        type="number"
        name="enrollmentYear"
        placeholder="Enrollment Year"
        value={formData.enrollmentYear}
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="gpa"
        placeholder="GPA"
        value={formData.gpa}
        onChange={handleChange}
      />

      <button type="submit" disabled={!isValid}>
        Add Student
      </button>
    </form>
  );
}

export default AddStudentForm;