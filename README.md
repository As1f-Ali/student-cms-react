# Student Course Management System (React)

A Student Course Management System built using **React + Vite** as part of the **TEACHTOTECH React Native Internship Program - Week 4 React Fundamentals Assignment**.

This project is a React rebuild of the Week 2 Student Course Management System. It demonstrates React fundamentals including components, props, state management, controlled forms, list rendering, filtering, and immutable updates.

---

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/As1f-Ali/student-cms-react.git
```

Navigate to the project folder:

```bash
cd student-cms-react
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL provided by Vite in your browser.

---

# Features

- Component-based React architecture
- Display students using reusable student cards
- Search students by name
- Filter students by course
- Search and course filtering work together
- Student statistics dashboard:
  - Total students count
  - Average student age
  - Students count per course
- Empty state when no student matches the search/filter
- Add new students using controlled forms
- Edit existing student details
- Delete students
- Student details modal
- Reusable Card component using children
- Custom CSS styling

---

# Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── StatsDashboard.jsx
│   ├── SearchBar.jsx
│   ├── CourseFilter.jsx
│   ├── AddStudentForm.jsx
│   ├── StudentModal.jsx
│   └── Card.jsx
│
├── data/
│   └── students.json
│
├── utils/
│   └── stats.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# React Concepts Demonstrated

| Concept | Where it is implemented |
|---|---|
| Components | Each UI section is separated into individual components |
| Props | Data and callback functions are passed between components |
| Props destructuring | Used in component function parameters |
| List rendering | StudentList.jsx uses `.map()` |
| key prop | Student id is used as React key |
| Conditional rendering | Empty state and modal rendering |
| useState | App.jsx manages application state |
| Controlled inputs | SearchBar and AddStudentForm |
| Immutable updates | Add, edit and delete student operations |
| Lifting state up | Shared state is managed in App.jsx |
| Derived values | Filtered students and statistics are calculated during render |

---

# React vs Vanilla JavaScript Reflection

## 1. What did React make easier compared to vanilla JavaScript?

In the vanilla JavaScript version, I had to manually create HTML elements, update the DOM, and refresh the UI whenever the data changed.

React made this easier because the UI automatically updates when state changes. Components also helped organize the application into smaller reusable parts instead of managing one large file.

---

## 2. What did React make harder or more confusing?

React was initially confusing because concepts like props, state, and one-way data flow were different from directly manipulating the DOM.

Instead of telling the browser exactly what to change, React requires thinking about what the UI should look like for the current state.

---

## 3. Where does your application's state live and why?

The main application state lives inside `App.jsx`.

This is because multiple components need access to the same data:

- StudentList displays students
- SearchBar updates search text
- CourseFilter updates selected course
- Add/Edit/Delete operations modify the student list

Keeping the state in App.jsx allows data to flow down through props and keeps a single source of truth.
