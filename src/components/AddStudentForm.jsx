import { useState, useEffect } from "react";

function AddStudentForm({
  onAddStudent,
  onUpdateStudent,
  editingStudent,
  onCancelEdit
}) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    enrollmentYear: "",
    gpa: ""
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        age: editingStudent.age,
        email: editingStudent.email,
        course: editingStudent.course,
        enrollmentYear: editingStudent.enrollmentYear,
        gpa: editingStudent.gpa
      });
    } else {
      setFormData({
        name: "",
        age: "",
        email: "",
        course: "",
        enrollmentYear: "",
        gpa: ""
      });
    }
  }, [editingStudent]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingStudent) {
      onUpdateStudent({
        ...editingStudent,
        ...formData,
        age: Number(formData.age),
        enrollmentYear: Number(formData.enrollmentYear),
        gpa: Number(formData.gpa)
      });
    } else {
      onAddStudent({
        id: Date.now(),
        ...formData,
        age: Number(formData.age),
        enrollmentYear: Number(formData.enrollmentYear),
        gpa: Number(formData.gpa)
      });
    }

    setFormData({
      name: "",
      age: "",
      email: "",
      course: "",
      enrollmentYear: "",
      gpa: ""
    });

    onCancelEdit();
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
      <h2>
        {editingStudent ? "Edit Student" : "Add Student"}
      </h2>

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
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button
          type="button"
          onClick={onCancelEdit}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddStudentForm;