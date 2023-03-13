// ## Practice questions

// 9.  Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.

import React from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 20.99, category: "Clothing" },
  { id: 2, name: "Running Shoes", price: 79.99, category: "Footwear" },
  { id: 3, name: "Smartphone", price: 799.99, category: "Electronics" },
  { id: 4, name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
  { id: 5, name: "Laptop", price: 1299.99, category: "Computers" },
];

const Question09 = () => {
  return (
    <div>
      <h1>Online Store - 2</h1>
      <ol>
        {products.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Name - {item.name}</span>
            <span style={{ width: `250px` }}>Price - {item.price}</span>
            <span>Category - {item.category}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Question09;
