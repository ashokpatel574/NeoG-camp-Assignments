/*
Considering above data given in question 8, add a border around the employee details whose designation is “President”.

*/

import React from "react";
import Data from "../Data.js";

const { employees } = Data;

const setBorderToPresident = (designation) => {
  if (designation === `President`) return { border: `2px solid black` };
};

const Question11 = () => {
  return (
    <div>
      <h2>Answer - 11</h2>

      <ul>
        {employees.map(({ name, level, dept, designation, salary }, id) => (
          <li key={id} style={setBorderToPresident(designation)}>
            name : {name}, level: {level}, dept: {dept}, designation:{" "}
            {designation}, salary: {salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question11;
