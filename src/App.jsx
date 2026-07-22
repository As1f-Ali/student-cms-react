import Header from "./components/Header";
import StudentList from "./components/StudentList";
import students from "./data/students.json";

function App() {
  return (
    <>
      <Header />
      <StudentList students={students} />
    </>
  );
}

export default App;