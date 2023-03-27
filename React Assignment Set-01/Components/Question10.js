/*
Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.
*/

import React from "react";
import Data from "../Data.js";

const { employees } = Data;

const levelTwoEmployee = (level) => {
  if (level === 2) return { backgroundColor: `orange` };
};

const Question10 = () => {
  return (
    <div>
      <h2>Answer - 10</h2>

      <ul>
        {employees.map(({ name, level, dept, designation, salary }, id) => (
          <li key={id} style={levelTwoEmployee(level)}>
            name : {name}, level: {level}, dept: {dept}, designation:{" "}
            {designation}, salary: {salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question10;
