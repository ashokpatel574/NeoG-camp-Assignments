/*
Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and genre of each movie on the screen using the useState hook. Add a dropdown which filters the movies by genre.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch06 } from "../contants";

const MoviesList02 = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [movieDataByGenre, setMovieDataByGenre] = useState([]);

  function changeHandler(e) {
    const filteredByGenre = moviesData.filter(
      ({ genre }) => genre === e.target.value
    );

    e.target.value === `All`
      ? setMovieDataByGenre([...moviesData])
      : setMovieDataByGenre(
          filteredByGenre.length > 0 ? (
            filteredByGenre
          ) : (
            <p>No Movies Found for Selected Genre</p>
          )
        );
  }

  async function getMoviesListData() {
    try {
      const moviesListData = await fakeFetch06(
        `https://example.com/api/movies`
      );

      setMoviesData(moviesListData.data);
      setMovieDataByGenre(moviesListData.data);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getMoviesListData();
  }, []);

  return (
    <div>
      <h2>Answer - 06</h2>
      <h2>Movies</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <>
          <label htmlFor="MoviesList Dropbox">Movies filter by Genre: </label>
          <select id="MoviesList Dropbox" onChange={(e) => changeHandler(e)}>
            <option value="All">All</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comey</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>

          <ul>
            {movieDataByGenre.length > 0
              ? movieDataByGenre?.map(({ title, year, genre }) => (
                  <li key={title.toString()}>
                    <p>Name: {title}</p>
                    <p>Year: {year}</p>
                    <p>Genre: {genre}</p>
                  </li>
                ))
              : movieDataByGenre}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesList02;
