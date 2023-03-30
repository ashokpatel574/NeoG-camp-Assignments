/*
Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.


*/

import React, { useState } from "react";

const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";

const ColorPicker = () => {
  const [redColor, setRedColor] = useState("");
  const [blueColor, setBlueColor] = useState("");
  const [greenColor, setGreenColor] = useState("");

  function clickHandler(e) {
    if (e.target.value === "red") {
      setRedColor(red);
    }

    if (e.target.value === "blue") {
      setBlueColor(blue);
    }

    if (e.target.value === "green") {
      setGreenColor(green);
    }
  }

  return (
    <div>
      <h2>Answer - 09</h2>
      <div>
        <button onClick={(e) => clickHandler(e)} value="red">
          Red color
        </button>
        <p> {redColor}</p>
      </div>
      <div>
        <button onClick={(e) => clickHandler(e)} value="blue">
          Blue color
        </button>
      </div>
      <p>{blueColor}</p>
      <div>
        <button onClick={(e) => clickHandler(e)} value="green">
          Green color
        </button>
        <p>{greenColor}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
