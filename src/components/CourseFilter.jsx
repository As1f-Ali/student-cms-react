function CourseFilter({ selectedCourse, setSelectedCourse, courses }) {
  return (
    <select
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option value="All">All Courses</option>

      {courses.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}

    </select>
  );
}

export default CourseFilter;