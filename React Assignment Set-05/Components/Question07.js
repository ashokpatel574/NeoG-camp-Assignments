/*
Create a React component called Comments.

a. Fetch the comments using thefake fetch and list the data on DOM.

b. Each comment component will have the text, user’s name and a delete button.

c. On click of the delete button, that particular comment object should be deleted and should not be visible on the DOM.

*/

import React, { useEffect, useState } from "react";
import { fakeFetch07 } from "../contants";

const Question07 = () => {
  const [userComments, setUserCommenst] = useState({
    comments: [],
    error: null,
    isLoading: true,
  });

  async function getUserCommentsDeatils() {
    try {
      const commentsDetails = await fakeFetch07(
        `https://example.com/api/comments`
      );

      setUserCommenst({
        comments: commentsDetails.data.comments,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setUserCommenst({
        comments: [],
        error: error,
        isLoading: false,
      });
    }
  }

  function clickhandler(index) {
    const updatedCommentsArray = [...userComments.comments];
    updatedCommentsArray.splice(index, 1);
    setUserCommenst({
      comments: updatedCommentsArray,
      error: null,
      isLoading: false,
    });
  }

  useEffect(() => {
    getUserCommentsDeatils();
  }, []);

  return (
    <div>
      <h2>Answer - 07</h2>
      <h2>Comments</h2>

      <ul>
        {userComments.isLoading ? (
          <h3>Loading...</h3>
        ) : userComments.error ? (
          <p>
            {userComments.error.status} {userComments.error.message}
          </p>
        ) : (
          userComments.comments?.map(({ name, text }, id) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>{text}</p>
              <button onClick={() => clickhandler(id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question07;
