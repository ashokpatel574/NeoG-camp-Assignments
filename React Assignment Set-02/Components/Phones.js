/*
Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.

*/

import React from "react";

const Phones = ({ productsPhone }) => {
  return (
    <div>
      <h2>Answer - 05 </h2>
      <ul>
        {productsPhone
          .filter(({ name }) => name === "mobile")
          .map(({ id, name, description, price }) => (
            <li key={id}>
              Name:{name}, Description:{description}, Price:{price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Phones;
