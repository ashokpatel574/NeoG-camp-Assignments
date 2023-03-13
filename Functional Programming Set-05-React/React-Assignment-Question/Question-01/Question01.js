// ## Practice questions

// 1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

import React from "react";

const watchlist = [
  { id: 1, title: `Batman`, director: `Christopher Nolan` },
  { id: 2, title: `Ironman`, director: `Jon Favreau` },
  { id: 3, title: `Spiderman`, director: `Sam Raimi` },
  { id: 4, title: `Superman`, director: `Richard Donner` },
  { id: 5, title: `Antman`, director: `Peyton Reed` },
];

const Question01 = () => {
  return (
    <div className="movie_List">
      <h1>Movie watchlist</h1>
      <ul>
        {watchlist.map((item) => (
          <li key={item.id}>
            {item.title} directed by {item.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question01;
