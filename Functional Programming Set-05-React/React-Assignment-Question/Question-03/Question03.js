// ## Practice questions

// 3. Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

import React from "react";

const libraryBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.5,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 4.2,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.0,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.7,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4.1,
  },
];

const Question03 = () => {
  return (
    <div>
      <h1>Library Books</h1>
      <ul>
        {libraryBooks.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Title - {item.title}</span>
            <span style={{ width: `250px` }}>Author - {item.author}</span>
            <span style={{ width: `300px` }}>Rating- {item.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question03;
