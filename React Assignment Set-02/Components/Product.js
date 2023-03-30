/*
Build a Product component that receives product name and price as props and displays them on DOM.

The name should be in bold and blue in color
Price should be in italics and green in color

*/

import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h2>Answer - 02</h2>
      <span style={{ fontWeight: "bold", color: `blue` }}>{name} </span>
      <span style={{ fontStyle: "italic", color: `green` }}>${price}</span>
    </div>
  );
};

export default Product;
