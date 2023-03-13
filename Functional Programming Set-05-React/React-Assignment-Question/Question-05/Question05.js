// ## Practice questions

// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.

import React from "react";

const recipes = [
  {
    id: 1,
    recipeName: "Chocolate Cake",
    creatorName: "Mary Smith",
  },
  {
    id: 2,
    recipeName: "Spaghetti Carbonara",
    creatorName: "Mario Rossi",
  },
  {
    id: 3,
    recipeName: "Vegetable Curry",
    creatorName: "Samantha Lee",
  },
  {
    id: 4,
    recipeName: "Pesto Pasta Salad",
    creatorName: "John Doe",
  },
  {
    id: 5,
    recipeName: "Roast Chicken",
    creatorName: "Emily Wang",
  },
];

const Question05 = () => {
  return (
    <div>
      <h1>Recipe Cookbook</h1>
      <ul>
        {recipes.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>
              Recipe name - {item.recipeName}
            </span>
            <span style={{ width: `250px` }}>
              Recipe creatorName - {item.creatorName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question05;
