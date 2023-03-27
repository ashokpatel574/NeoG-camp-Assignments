/* 
Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 },
];

*/

import React from "react";

const Question06 = ({ products }) => {
  return (
    <div>
      <h2>Answer - 06</h2>
      <h3>Product Names</h3>
      <ul>
        {products
          .filter(({ quantity, sales }) => sales > quantity)
          .map(({ name, quantity, sales }, id) => (
            <li key={id}>
              Name:{name}, Quantity:{quantity}, Sales:{sales}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Question06;
