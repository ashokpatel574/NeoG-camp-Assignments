/*
Given an array of todoItems:

const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: false},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: false},
]
a. Build a React component that takes the todoItems as props and list all the todo tasks.

b. Add a "Mark as Done" button against each item and toggle isDone property value between true and false on click of the button. If isDone is true change the color of that task to red with a strikethrough and if it is false remove the strikethrough and the red color.

*/

import React, { useState } from "react";

const TodoList02 = ({ todoItems2 }) => {
  const [updateListItem, setUpdateListItem] = useState(todoItems2);

  function clickhandler(id) {
    const newItems = [...updateListItem];
    newItems[id].isDone = !updateListItem[id].isDone;
    setUpdateListItem(newItems);
  }

  return (
    <div>
      <h2>Answer - 05</h2>

      <ul>
        {updateListItem.length > 0 &&
          updateListItem.map(({ id, task, isDone }, index) => (
            <li key={id}>
              <span
                style={{
                  marginRight: "50px",
                  color: isDone && "red",
                  textDecoration: isDone && "line-through",
                }}
              >
                {task}
              </span>
              <button onClick={() => clickhandler(index)}>Mark as Done</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList02;
