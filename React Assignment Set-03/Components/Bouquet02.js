/*
Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop.

 Expected Output
 1. snapdragon
 2. sunflower
*/

import React from "react";

const Bouquet02 = ({ bouquet02 }) => {
  console.log();

  return (
    <div>
      <h2>Answer - 07</h2>

      <ol>
        {bouquet02
          .filter(({ price }) => price > 2000)
          .reduce((acc, { flowers }) => [...acc, ...flowers], [])
          .map((flower, i) => (
            <li key={i}>{flower}</li>
          ))}
      </ol>
    </div>
  );
};

export default Bouquet02;
