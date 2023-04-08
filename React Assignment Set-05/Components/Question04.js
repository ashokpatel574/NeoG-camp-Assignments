/*
Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch04 } from "../contants";

const Question04 = ({ widthImg }) => {
  const [userProfile, setUserProfile] = useState({
    users: undefined,
    error: null,
    isLoading: true,
  });

  async function getUserProfileDetails() {
    try {
      const userProfileDetails = await fakeFetch04(
        "https://example.com/api/user"
      );

      setUserProfile({
        users: userProfileDetails?.data,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setUserProfile({
        users: [],
        error: error,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  return (
    <div>
      <h2>Answer - 04</h2>
      <h3>User Profile</h3>

      {userProfile.isLoading ? (
        <h3>Loading...</h3>
      ) : userProfile.error ? (
        <p>
          {userProfile.error.status} {userProfile.error.message}
        </p>
      ) : (
        userProfile.users && (
          <div>
            <img
              src={userProfile.users.image}
              alt={userProfile.users.name}
              width={widthImg}
            />
            <p>Name: {userProfile.users.name}</p>
            <p>Likes: {userProfile.users.likes}</p>
            <p>Comments: {userProfile.users.comments}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Question04;
