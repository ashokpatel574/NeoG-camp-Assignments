/*

Build a React component to display an image with a caption. The image and caption should be passed as props.

Data:

const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'

*/

import React from "react";

const Question04 = ({ imageWithCaption: { imageLink, caption } }) => {
  return (
    <div>
      <h2>Answer - 04 </h2>
      <img src={imageLink} alt={caption} width={`250px`} />
      <p>{caption}</p>
    </div>
  );
};

export default Question04;
