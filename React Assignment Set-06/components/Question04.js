/*
Create a React component that calls the video library api when the page is loaded completely and display all the videos on the screen. And on click of delete button, delete the first video in the list.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch04 } from "../contants";

const Question04 = () => {
  const [videoLibrary, setVideoLibrary] = useState([]);
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {
    setVideoLibrary(videoLibrary.slice(1));
  }

  async function getVideoLibrary() {
    try {
      const videoLibraryList = await fakeFetch04(
        "https://example.com/api/videos"
      );
      setVideoLibrary(videoLibraryList.data?.videos);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getVideoLibrary();
  }, []);

  return (
    <div>
      <h2>Answer - 04</h2>
      <p>PlayList</p>
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
          videoLibrary?.map(({ title, thumbnail, views, likes }) => (
            <div key={title.toString()}>
              <img
                src={thumbnail}
                alt={title}
                width={"200px"}
                height={"130px"}
              />
              <p>{title}</p>
              <p>Likes: {likes}</p>
              <p>Views: {views}</p>
            </div>
          ))
        )}
      </div>
      <button onClick={clickHandler} disabled={!videoLibrary.length && true}>
        Delete Video
      </button>
    </div>
  );
};

export default Question04;
