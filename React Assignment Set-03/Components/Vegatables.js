/*
Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

*/

import React, { useState } from "react";

const Vegatables = ({ vegetables, freshDate }) => {
  const [freshVegetables, setFreshVegetables] = useState(false);

  function clickHandler() {
    setFreshVegetables(true);
  }

  return (
    <div>
      <h2>Answer - 05</h2>

      <ol>
        {vegetables.map(({ id, name, pickDate }) => (
          <li
            key={id}
            style={{
              color: freshVegetables && pickDate === freshDate && "green",
            }}
          >
            Name: {name}, pickDate:{pickDate}
          </li>
        ))}
      </ol>

      <button onClick={clickHandler}>Highlight Fresh Vegetables</button>
    </div>
  );
};

export default Vegatables;
