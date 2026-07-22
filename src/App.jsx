import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import students from "./data/students.json";
import StatsDashboard from "./components/StatsDashboard";
import SearchBar from "./components/SearchBar";

function App() {

  const [searchText, setSearchText] = useState("");

  const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header />
      
      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      />

      <StatsDashboard students={students} />
      
      <StudentList students={filteredStudents} />
    </>
  );
}

export default App;