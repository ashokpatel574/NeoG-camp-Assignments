/*
Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and rating of each movie on the screen using the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown values - 2005 to 2010.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch03 } from "../contants";

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [movieDataByYear, setMovieDataByYear] = useState([]);

  function changeHandler(e) {
    const filteredByYear = moviesData.filter(
      ({ year }) => year === +e.target.value
    );

    e.target.value === `All`
      ? setMovieDataByYear([...moviesData])
      : setMovieDataByYear(
          filteredByYear.length > 0 ? (
            filteredByYear
          ) : (
            <p>No Movies Found for Selected Year</p>
          )
        );
  }

  async function getMoviesListData() {
    try {
      const moviesListData = await fakeFetch03(
        `https://example.com/api/movies`
      );

      setMoviesData(moviesListData.data);
      setMovieDataByYear(moviesListData.data);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getMoviesListData();
  }, []);

  return (
    <div>
      <h2>Answer - 03</h2>
      <h2>Movies</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <>
          <label htmlFor="MoviesList Dropbox">Movies filter by Year: </label>
          <select id="MoviesList Dropbox" onChange={(e) => changeHandler(e)}>
            <option value="All">All</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
          </select>

          <ul>
            {movieDataByYear.length > 0
              ? movieDataByYear?.map(({ title, year, rating }) => (
                  <li key={title.toString()}>
                    <p>Name: {title}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                  </li>
                ))
              : movieDataByYear}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesList;
