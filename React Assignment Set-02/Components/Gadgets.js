/*
Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

*/

import React from "react";

function higerPriceBorderStyle(price) {
  if (price > 50000) {
    return { border: `2px solid black` };
  }
}

const Gadgets = ({ products }) => {
  return (
    <div>
      <h2>Answer - 04</h2>

      <ol>
        {products.map(({ id, name, description, price }) => (
          <li style={higerPriceBorderStyle(price)} key={id}>
            Name: {name}, Description:{description}, Price:{price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Gadgets;
