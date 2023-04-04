/*
Given an array of todoItems:

const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: true},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: true},
]
a. Build a React component that takes the todoItems as props and list all the todo tasks.

b. if isDone is true then show the item with a strikethrough.

c. Add a X button against each item and remove that task from the list on click of the button.

*/

import React, { useState } from "react";

const TodoList01 = ({ todoItems1 }) => {
  const [updateItemList, setUpdateItemList] = useState(todoItems1);

  function clickHandler(id) {
    const newItems = [...updateItemList];
    newItems.splice(id, 1);
    setUpdateItemList(newItems);
  }

  return (
    <div>
      <h2>Answer - 04</h2>

      <ul>
        {updateItemList.length > 0 &&
          updateItemList.map(({ id, task, isDone }, index) => (
            <li key={id}>
              <span
                style={{
                  textDecoration: isDone && "line-through",
                  marginRight: "30px",
                }}
              >
                {task}
              </span>
              <button onClick={() => clickHandler(index)}>x</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList01;
