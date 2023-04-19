/*
Create a React component that calls the userProfile api and list the details of the user when the page loads. Create a button saying Update name and on click of that button, change the name of the user.
*/

import React, { useState, useEffect } from "react";
import { fakeFetch08 } from "../contants";

const Question08 = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {
    setUserProfile((prevState) => ({
      ...prevState,
      name: "Emily",
      email: "emily@example.com",
    }));
  }

  async function getUserProfile() {
    try {
      const userProfileDetails = await fakeFetch08(
        "https://example.com/api/profile"
      );

      setUserProfile(userProfileDetails.data?.profiles);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <h2>Answer - 08</h2>
      <h2>Profiles</h2>

      <div>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          <>
            <p>
              <strong>Name:</strong>
              {userProfile.name}
            </p>
            <p>
              <strong>Age:</strong>
              {userProfile.age}
            </p>
            <p>
              <strong>Gender:</strong>
              {userProfile.gender}
            </p>
            <p>
              <strong>Email:</strong>
              {userProfile.email}
            </p>
            <p>
              <strong>Occupation:</strong>
              {userProfile.occupation}
            </p>
          </>
        )}
      </div>
      <button onClick={clickHandler}>Update Name</button>
    </div>
  );
};

export default Question08;
