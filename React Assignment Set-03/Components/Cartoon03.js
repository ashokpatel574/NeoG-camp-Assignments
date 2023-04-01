/*
Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”.
*/

import React from "react";

const Cartoon03 = ({ cartoons, intelligence }) => {
  return (
    <div>
      <h2>Answer - 04</h2>

      {cartoons
        .filter(({ superpower }) => superpower === intelligence)
        .map(({ id, name, superpower, magnitude }) => (
          <li key={id}>
            {name} - {superpower} - {magnitude}
          </li>
        ))}
    </div>
  );
};

export default Cartoon03;
