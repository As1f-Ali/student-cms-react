import Header from "./components/Header";
import StudentCard from "./components/StudentCard";

function App() {
  const student = {
    id: 1,
    name: "Aarav Sharma",
    age: 21,
    email: "aarav.sharma@example.com",
    course: "React Native",
    enrollmentYear: 2024,
    gpa: 8.4,
  };

  return (
    <>
      <Header />
      <StudentCard student={student} />
    </>
  );
}

export default App;