import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StudentList from "./components/StudentList";
import students from "./data/students.json";
import StatsDashboard from "./components/StatsDashboard";
import SearchBar from "./components/SearchBar";
import CourseFilter from "./components/CourseFilter";
import AddStudentForm from "./components/AddStudentForm";
import StudentModal from "./components/StudentModal";

function App() {
  const [studentList, setStudentList] = useState(students);

  const [searchText, setSearchText] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  function addStudent(newStudent) {
    setStudentList([
      ...studentList,
      newStudent
    ]);
  }

  function updateStudent(updatedStudent) {
    setStudentList(
      studentList.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditingStudent(null);
  }

  function deleteStudent(id) {
    setStudentList(
      studentList.filter((student) => student.id !== id)
    );
  }

  function editStudent(student) {
    setEditingStudent(student);
  }

  function cancelEdit() {
    setEditingStudent(null);
  }

  function openStudent(student) {
    setSelectedStudent(student);
  }

  function closeStudent() {
    setSelectedStudent(null);
  }

  const filteredStudents = studentList.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCourse =
      selectedCourse === "All" ||
      student.course === selectedCourse;

    return matchesName && matchesCourse;
  });

  const courses = [
    ...new Set(studentList.map((student) => student.course))
  ];

  return (
    <>
      <Header />

      <AddStudentForm
        onAddStudent={addStudent}
        onUpdateStudent={updateStudent}
        editingStudent={editingStudent}
        onCancelEdit={cancelEdit}
      />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <CourseFilter
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        courses={courses}
      />

      <StatsDashboard
        students={filteredStudents}
      />

      <StudentList
        students={filteredStudents}
        onDeleteStudent={deleteStudent}
        onEditStudent={editStudent}
        onViewStudent={openStudent}
      />

      <StudentModal
        student={selectedStudent}
        onClose={closeStudent}
      />
    </>
  );
}

export default App;