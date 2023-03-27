/*

Build a React component to display all the employee details as unordered list on the DOM in the following format:

name: name, level: level, dept: dept, designation: designation, salary: salary
No need to pass as props.

*/

import React from "react";
import Data from "../Data";

const Question08 = () => {
  const { employees } = Data;
  return (
    <div>
      <h2>Answer - 08</h2>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }, id) => (
          <li key={id}>
            name : {name}, level: {level}, dept: {dept}, designation:{" "}
            {designation}, salary: {salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question08;
