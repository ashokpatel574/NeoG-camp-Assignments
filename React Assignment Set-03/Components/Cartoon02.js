/*
Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.
*/

import React from "react";

const Cartoon02 = ({ cartoons }) => {
  return (
    <div>
      <h2>Answer - 03</h2>
      {cartoons
        .filter(({ magnitude }) => magnitude % 2 === 0)
        .map(({ id, name }) => (
          <h1 key={id}>Name: {name}</h1>
        ))}
    </div>
  );
};

export default Cartoon02;
