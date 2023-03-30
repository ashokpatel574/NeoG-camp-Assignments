/*
Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.

*/

import React from "react";

const Todo = ({ todoItems }) => {
  function setColor(isCompleted) {
    return isCompleted ? { color: "green" } : { color: "red" };
  }
  return (
    <div>
      <h2>Answer - 07</h2>

      <ul>
        {todoItems.map(({ id, title, description, isCompleted }) => (
          <li key={id} style={setColor(isCompleted)}>
            <header>{title}</header>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
