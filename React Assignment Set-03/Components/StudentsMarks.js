/*
Create an array of objects representing students marks out of 100. Each object consists of: id, name and marks. Build a React component that calculates the mean marks of all the students to see if the institute passes the criteria of the certification.

If the mean is above 80, display on the DOM Certification Approved

If the mean is below 80, display on the DOM Certification Not Approved

*/

import React from "react";

const StudentsMarks = ({ studentData }) => {
  const meanMarks = studentData.reduce(
    (acc, { marks }, i) =>
      i < studentData.length - 1
        ? acc + marks
        : (acc + marks) / studentData.length,
    0
  );

  return (
    <div>
      <h2>Answer - 10</h2>
      {meanMarks > 80
        ? `DOM Certification Approved`
        : `DOM Certification Not Approved`}
    </div>
  );
};

export default StudentsMarks;
