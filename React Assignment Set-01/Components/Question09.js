/*

Considering above data given in question 8, at the end of all the employee details, calculate and display the total salary expense of the company. Total Salary Expense: totalSalary

*/

import React from "react";
import Data from "../Data.js";

const { employees } = Data;

const getEmployeeSalary = (employees) => {
  return employees.reduce((acc, { salary }) => acc + salary, 0);
};

const Question09 = () => {
  return (
    <div>
      <h2>Answer - 09</h2>

      <ul>
        {employees.map(({ name, level, dept, designation, salary }, id) => (
          <li key={id}>
            name : {name}, level: {level}, dept: {dept}, designation:{" "}
            {designation}, salary: {salary}
          </li>
        ))}
      </ul>

      <p>Total Salary Expense : {getEmployeeSalary(employees)}</p>
    </div>
  );
};

export default Question09;
