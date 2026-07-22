export function getTotalStudents(students) {
    return students.length;
}

export function getAverageAge(students) {
    if ( students.length === 0 ) return 0;

    const totalAge = students.reduce(
        (sum, student) => sum + student.age,
        0
    )

    return (totalAge / students.length).toFixed(1);
}

export function getCourseCounts(students) {
    return students.reduce((counts, student) => {
        counts[student.course] = (counts[student.course] || 0) + 1;
        return counts;
    }, {})
}