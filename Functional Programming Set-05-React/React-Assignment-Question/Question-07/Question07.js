// ## Practice questions

// 7.  Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

import React from "react";

const students = [
  { id: 1, name: "Alice", grade: 85, attendance: 0.95 },
  { id: 2, name: "Bob", grade: 78, attendance: 0.75 },
  { id: 3, name: "Charlie", grade: 92, attendance: 0.9 },
  { id: 4, name: "David", grade: 65, attendance: 0.8 },
  { id: 5, name: "Emily", grade: 87, attendance: 0.97 },
];

const Question07 = () => {
  return (
    <div>
      <h1>Class Register</h1>
      <ol>
        {students.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Name - {item.name}</span>
            <span style={{ width: `250px` }}>Grade - {item.grade}</span>
            <span>Attendance - {item.attendance}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Question07;
