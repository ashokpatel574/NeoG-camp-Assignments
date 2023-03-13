// ## Practice questions

// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

import React from "react";

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    price: 20000,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    price: 22000,
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    price: 35000,
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    price: 40000,
  },
  {
    id: 5,
    make: "Tesla",
    model: "Model S",
    price: 70000,
  },
];

const Question06 = () => {
  return (
    <div>
      <h1>Cars Dealership</h1>
      <ul>
        {cars.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Make - {item.make}</span>
            <span style={{ width: `250px` }}>Model - {item.model}</span>
            <span>Price - {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question06;
