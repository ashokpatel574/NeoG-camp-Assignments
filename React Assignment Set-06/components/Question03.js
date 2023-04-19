/*
Create a React component that calls the habit tracker api when the page is loaded completely and display the habits with the total days they were followed and days skipped in between.

*/

import React, { useEffect, useState } from "react";

import { fakeFetch03 } from "../contants";

const Question03 = () => {
  const [todoListItems, setTodoListItems] = useState([]);
  const [errorList, setErrorList] = useState(null);

  async function getTodoListItems() {
    try {
      const todoDetails = await fakeFetch03("https://example.com/api/habits");

      setTodoListItems(todoDetails.data?.habits);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getTodoListItems();
  }, []);

  return (
    <div>
      <h2>Answer - 03</h2>
      <ul style={{ textAlign: "left" }}>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          todoListItems?.map(({ title, desc, daysFollowed, daysSkipped }) => (
            <li key={title.toString()}>
              <h3>{title}</h3>
              <p style={{ marginBottom: "20px" }}>{desc}</p>
              <p>
                <strong>Days Followed</strong> : {daysFollowed}
              </p>
              <p>
                <strong>Days Skipped</strong> : {daysSkipped}
              </p>
              <hr />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question03;
