/*
Create a React component that calls the video api and display all the details of the video on the screen. And on click of add label button, add a label property to the object and display the details on the screen
*/

import React, { useState, useEffect } from "react";
import { fakeFetch09 } from "../contants";

const Question09 = () => {
  const [videoData, setVideoData] = useState([]);
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {}

  async function getVideoDetails() {
    try {
      const videoDetails = await fakeFetch09(
        "https://example.com/api/getvideo"
      );

      setVideoData(videoDetails.data?.videos);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getVideoDetails();
  }, []);
  return (
    <div>
      <h2>Answer - 09</h2>

      <div>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          videoData && (
            <>
              <img
                src={videoData?.thumbnail}
                alt={videoData?.title}
                width={"250px"}
              />
              <h2>{videoData?.title}</h2>
              <p>
                <strong>Views:</strong> {videoData?.views}
              </p>
              <p>
                <strong>Likes:</strong> {videoData?.likes}
              </p>
            </>
          )
        )}
      </div>
      <button onClick={clickHandler}>Add Label</button>
    </div>
  );
};

export default Question09;
