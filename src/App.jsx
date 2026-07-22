import Header from "./components/Header";
import StudentList from "./components/StudentList";
import students from "./data/students.json";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  return (
    <>
      <Header />
      <StatsDashboard students={students} />
      <StudentList students={students} />
    </>
  );
}

export default App;