/*

Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM.

Data:
const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}

*/

import React from "react";

const getStudentsTotalMarks = function (student) {
  return Object.values(student).reduce(
    (acc, curr) => typeof curr === `number` && acc + curr,
    0
  );
};

const Question07 = ({ student }) => {
  const totalMarks = getStudentsTotalMarks(student);
  return (
    <div>
      <h2>Answer - 07 </h2>

      <ul>
        {Object.entries(student).map((item, id) => (
          <li key={id}>
            {item[0]} : {item[1]}
          </li>
        ))}
      </ul>
      <p>Total Marks :{totalMarks}</p>
      <p>
        Grade :
        {totalMarks >= 225
          ? `A`
          : totalMarks >= 180
          ? `B`
          : totalMarks >= 150
          ? `C`
          : `D`}
      </p>
    </div>
  );
};

export default Question07;
