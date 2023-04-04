/*
Given an array of items:
const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];
a. Build a React component that displays a list of items. Display fruits in orange color and vegetables in green color.

b. Create two buttons to filter the items by their category using the useState hook.

*/

import React, { useState } from "react";

const FruitAndVegetables = ({ itemList }) => {
  const [filteredItems, setFilteredItems] = useState(itemList);

  function filterData(searchItem) {
    return itemList.filter(({ category }) => category === searchItem);
  }

  return (
    <div>
      <h2>Answer - 03</h2>

      <div>
        <button onClick={() => setFilteredItems(itemList)}>All</button>
        <button onClick={() => setFilteredItems(filterData("Fruit"))}>
          Fruits
        </button>
        <button onClick={() => setFilteredItems(filterData("Vegetable"))}>
          vegetables
        </button>
      </div>

      <ul>
        {filteredItems.map(({ id, name, category }) => (
          <li
            key={id}
            style={{
              color:
                category === "Fruit"
                  ? "orange"
                  : category === "Vegetable"
                  ? "Green"
                  : null,
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitAndVegetables;
