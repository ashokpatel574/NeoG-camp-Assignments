// ## Practice questions

// 8. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

import React from "react";

const watchlist = [
  {
    id: 1,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    runtime: 175,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    runtime: 142,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    runtime: 152,
  },
  { id: 4, title: "Pulp Fiction", director: "Quentin Tarantino", runtime: 154 },
  {
    id: 5,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    runtime: 136,
  },
];

const Question08 = () => {
  return (
    <div>
      <h1>Movie Lists</h1>
      <ol>
        {watchlist.map((item) => (
          <li key={item.id} style={{ display: `flex`, gap: `50px` }}>
            <span style={{ width: `250px` }}>Title - {item.title}</span>
            <span style={{ width: `250px` }}>Director - {item.director}</span>
            <span>Runtime - {item.runtime}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Question08;
