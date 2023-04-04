/*
Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.

*/

import React, { useState } from "react";

const FontIncrementDecrement = () => {
  const [fontsize, setFontSize] = useState(18);

  return (
    <div>
      <h2>Answer - 02</h2>
      <h4 style={{ fontSize: `${fontsize}px` }}>message</h4>

      <div>
        <button onClick={() => setFontSize((preState) => preState - 1)}>
          -
        </button>
        <button onClick={() => setFontSize((preState) => preState + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default FontIncrementDecrement;
