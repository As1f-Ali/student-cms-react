import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import students from "./data/students.json";
import StatsDashboard from "./components/StatsDashboard";
import SearchBar from "./components/SearchBar";
import CourseFilter from "./components/CourseFilter";

function App() {

  const [searchText, setSearchText] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");

  const filteredStudents = students.filter((student) => {

  const matchesName = student.name
    .toLowerCase()
    .includes(searchText.toLowerCase());

  const matchesCourse =
    selectedCourse === "All" ||
    student.course === selectedCourse;

  return matchesName && matchesCourse;
  });

  const courses = [
  ...new Set(students.map((student) => student.course))
  ];

  return (
    <>
      <Header />
      
      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      />

      <CourseFilter
      selectedCourse={selectedCourse}
      setSelectedCourse={setSelectedCourse}
      courses={courses}
      />

      <StatsDashboard students={filteredStudents} />

      <StudentList students={filteredStudents} />
    </>
  );
}

export default App;