/*
Given an array of books:

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
  { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
];
a. Build a React component that displays the title and author of each book.

b. Add buttons to filter the books by genre using the useState hook.

*/

import React, { useState } from "react";

const Books = ({ books }) => {
  const [allGenreList, setGenreList] = useState(books);

  function clickhandler(data) {
    const newList = [...books];
    setGenreList(newList.filter(({ genre }) => genre === data));
  }
  return (
    <div>
      <h2>Answer - 06</h2>
      <div>
        <button onClick={() => setGenreList(books)}>All Genres</button>
        <button onClick={() => clickhandler(`Classic`)}>Classic Genre</button>
        <button onClick={() => clickhandler(`Dystopian`)}>
          Dystopian Genre
        </button>
        <button onClick={() => clickhandler(`Young Adult`)}>Young Adult</button>
      </div>

      <ul>
        {allGenreList.map(({ id, title, author }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
