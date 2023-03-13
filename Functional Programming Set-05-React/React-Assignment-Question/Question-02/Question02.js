// ## Practice questions

// 2. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.

import React from "react";

const onlineStore = [
  { id: 1, name: `200 pages Note book`, price: `50`, category: `Stationary` },
  { id: 2, name: `Maggi 500 grams`, price: `49`, category: `FMCG` },
  { id: 3, name: `Dumble 10kgs 2 pair`, price: `1200`, category: `Fitness` },
  { id: 4, name: `T-shirt`, price: `600`, category: `Clothing- fashion wear` },
  { id: 5, name: `Sneakers`, price: `2500`, category: `Footwear` },
];

const Question02 = () => {
  return (
    <div className="movie_List">
      <h1>Online store</h1>
      <ul>
        {onlineStore.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Product name - {item.name}</span>
            <span style={{ width: `150px` }}>Product price - {item.price}</span>
            <span style={{ width: `300px` }}>
              Product category - {item.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question02;
