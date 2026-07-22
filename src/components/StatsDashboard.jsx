import {
  getAverageAge,
  getCourseCounts,
  getTotalStudents,
} from "../utils/stats";

function StatsDashboard({ students }) {
  const courseCounts = getCourseCounts(students);

  return (
    <div className="stats-dashboard">
      <div className="total-students">
        <p>Total Students: {getTotalStudents(students)}</p>
      </div>

      <div className="average-age">
        <p>Average Age: {getAverageAge(students)}</p>
      </div>

      <div className="course-count">
        <h3>Students by Course</h3>

        {Object.entries(courseCounts).map(([course, count]) => (
          <p key={course}>
            {course}: {count}
          </p>
        ))}
      </div>
    </div>
  );
}

export default StatsDashboard;