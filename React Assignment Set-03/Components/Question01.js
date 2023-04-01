/*
Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200

*/

import React from "react";

const Question01 = ({ imageData }) => {
  const { link, height, width } = imageData;

  return (
    <div>
      <h2>Answer - 01</h2>
      <img src={link} width={width} height={height} alt="Random Image" />
    </div>
  );
};

export default Question01;
