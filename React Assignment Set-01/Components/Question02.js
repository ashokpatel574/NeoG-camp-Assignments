/*

Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

Data:

const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

*/

import React from "react";

const Question02 = ({ colorStyle }) => {
  const { backgroundColor, color, borderRadius, padding } = colorStyle;

  return (
    <div>
      <h2>Answer - 02</h2>
      <button style={{ backgroundColor, color, borderRadius, padding }}>
        Start
      </button>
    </div>
  );
};

export default Question02;
