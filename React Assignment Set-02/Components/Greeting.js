// 1. Create a React component called Greeting that receives a name prop and displays a message like "Hello, name!" on the DOM.

import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Answer - 01</h2>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Greeting;
