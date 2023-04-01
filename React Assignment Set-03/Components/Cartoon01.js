/*
Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. 
*/

import React from "react";

const Cartoon01 = ({ cartoons }) => {
  return (
    <div>
      <h2>Answer - 02</h2>

      {cartoons
        .filter(({ magnitude }) => magnitude > 5)
        .map(({ id, name, superpower, magnitude }) => (
          <li key={id}>
            Name: {name}, Superpower: {superpower}, Magnitude: {magnitude}
          </li>
        ))}
    </div>
  );
};

export default Cartoon01;
