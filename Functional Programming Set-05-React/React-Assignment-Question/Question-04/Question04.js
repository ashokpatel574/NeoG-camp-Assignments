// ## Practice questions

// 4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

import React from "react";

const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "Sales",
    salary: 50000,
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    salary: 60000,
  },
  {
    id: 3,
    name: "Bob Johnson",
    department: "IT",
    salary: 80000,
  },
  {
    id: 4,
    name: "Samantha Lee",
    department: "HR",
    salary: 55000,
  },
  {
    id: 5,
    name: "Mike Chen",
    department: "Finance",
    salary: 75000,
  },
];

const Question04 = () => {
  return (
    <div>
      <h1>Employee Database</h1>
      <ul>
        {employees.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Name - {item.name}</span>
            <span style={{ width: `250px` }}>
              Department - {item.department}
            </span>
            <span style={{ width: `300px` }}>Salary- {item.salary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question04;
