/*
Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:

luxury: 5
sports: 2

*/

import React from "react";

const Cars = ({ cars }) => {
  const categories = cars.reduce(
    (acc, { category }) =>
      acc[category]
        ? { ...acc, [category]: acc[category] + 1 }
        : { ...acc, [category]: 1 },
    {}
  );

  return (
    <div>
      <h2>Answer - 09</h2>

      <ul>
        {Object.entries(categories).map((item, i) => (
          <li key={i}>
            {item[0]} : {item[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
