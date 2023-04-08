/*
Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.

a. Show “Loading…” until your data displays on the DOM.

b. Handle errors by showing an error message on the DOM, in case of any error.

*/

import React, { useEffect, useState } from "react";
import { fakeFetch05 } from "../contants";

const Question05 = () => {
  const [userData, setUserData] = useState({
    users: [],
    error: null,
    isLoading: true,
  });

  async function getUserDetails() {
    try {
      const userDetails = await fakeFetch05("https://example.com/api/users");

      setUserData({
        users: userDetails?.data,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setUserData({
        users: [],
        error: error,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h2>Answer - 05</h2>

      <h3>User Feed</h3>
      {userData.isLoading ? (
        <h3>Loading...</h3>
      ) : userData.error ? (
        <p>
          {userData.error.status} {userData.error.message}
        </p>
      ) : (
        userData.users?.map(({ name, image, likes, comments }, id) => (
          <div key={id}>
            <img src={image} alt={name} width="250px" />
            <p>Name: {name}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Question05;
