/*
Create a React component that calls the todo api and display the todos in an unordered list and show the todos as a list. The todo should display a heading with a little description of what that todo is about. Under that, it should display all the tasks to be done as a list.

*/

import React, { useEffect, useState } from "react";
import { fakeFetch02 } from "../contants";

const Question02 = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [errorLists, setErrorLists] = useState(null);

  async function getTodoListItems() {
    try {
      const todosListsItems = await fakeFetch02(
        "https://example.com/api/todos"
      );
      setTodoLists(todosListsItems.data?.todos);
    } catch (error) {
      setErrorLists(error);
    }
  }

  useEffect(() => {
    getTodoListItems();
  }, []);

  return (
    <div>
      <h2>Answer - 02</h2>

      <ul style={{ textAlign: "left" }}>
        {errorLists ? (
          <p>
            {errorLists.status} {errorLists.message}
          </p>
        ) : (
          todoLists?.map(({ title, desc, todos }) => (
            <li key={title.toString()}>
              <h3>{`${title} : ${desc}`}</h3>
              <ol>
                {todos.map((items) => (
                  <li key={items.toString()}>{items}</li>
                ))}
              </ol>
              <hr />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question02;
