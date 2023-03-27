/*

Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. 

Data:
const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]

*/

import React from "react";

const Question05 = ({ products }) => {
  return (
    <div>
      <h2>Answer - 05</h2>
      <h3>Product Names</h3>
      <ul>
        {products.map(({ name }, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question05;
