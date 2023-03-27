/*
Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.

Data:

const items = ['pen', 'pencil', 'ruler', 'eraser']
*/

import React from "react";

const Question03 = ({ items, header }) => {
  return (
    <div>
      <h2>Answer - 03 </h2>
      <header>{header}</header>
      <ul>
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question03;
