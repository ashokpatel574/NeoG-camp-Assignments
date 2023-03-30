/*
Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.

Data:

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

*/

import React, { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [learningInfo, setLearningInfo] = useState("");

  function clickHandler() {
    setLearningInfo(learning);
  }

  return (
    <div style={{ paddingBottom: `20px` }}>
      <h2>Answer - 07</h2>

      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={clickHandler}>Know more</button>
      <p>{learningInfo}</p>
    </div>
  );
};

export default About;
