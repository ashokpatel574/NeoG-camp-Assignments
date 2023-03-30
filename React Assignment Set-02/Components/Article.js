/*
Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

Data:
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

*/

import React, { useState } from "react";

const Article = ({ title, content }) => {
  const [contentInfo, setContentInfo] = useState("");

  function clickHandler() {
    setContentInfo(content);
  }

  return (
    <div style={{ paddingBottom: "20px" }}>
      <h2>Answer - 06 </h2>

      <h1>{title}</h1>
      <button onClick={clickHandler}>Know More</button>
      <p>{contentInfo}</p>
    </div>
  );
};

export default Article;
