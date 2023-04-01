/*
Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it, in the format, “Price of bouquet with roses : {price}”

*/

import React from "react";

const Bouquets = ({ bouquet }) => {
  return (
    <div>
      <h2>Answer - 06 </h2>

      <ul>
        {bouquet
          .filter(({ flowers }) => flowers.includes("rose"))
          .map(({ id, price }) => (
            <li key={id}>Price of bouquet with roses : {price}</li>
          ))}
      </ul>
    </div>
  );
};

export default Bouquets;
