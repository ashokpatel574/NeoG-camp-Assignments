/*
Create a react component that calls the social media api when the page is loaded completely and display all the posts on the screen. And on click of show bakery button, show only the posts with category as bakery.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch05 } from "../contants";

const Question05 = () => {
  const [postListItems, setPostListItems] = useState([]);
  const [filterCategoryItems, setFilterCategoryItems] = useState([]);
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {
    const bakeryPostItems = postListItems.filter(
      ({ category }) => category === "Bakery"
    );

    setFilterCategoryItems(bakeryPostItems);
  }

  async function getPostItems() {
    try {
      const postItems = await fakeFetch05("https://example.com/api/posts");

      setPostListItems(postItems.data?.posts);
      setFilterCategoryItems(postItems.data?.posts);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getPostItems();
  }, []);

  return (
    <div>
      <h2>Answer - 05</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 250px)",
          gap: "20px",
        }}
      >
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          filterCategoryItems?.map(({ caption, src, views, likes }) => (
            <div key={caption.toString()}>
              <img src={src} alt={caption} width="250px" />
              <h3>{caption}</h3>
              <p>Likes: {likes}</p>
              <p>Views: {views}</p>
            </div>
          ))
        )}
      </div>
      <button onClick={clickHandler}>Show Bakery</button>
    </div>
  );
};

export default Question05;
