/*
Create a React component that fetches user data from an API endpoint using useEffect hook and displays the user's name, email, and phone number on the screen using the useState hook. Add a button which toggles the display of the user's address (street, suite, city, zipcode).
*/

import React, { useState, useEffect } from "react";
import { fakeFetch02 } from "../contants";

const UserDetails = () => {
  const [userData, setUserData] = useState(undefined);
  const [errorList, setErrorList] = useState(null);
  const [showUserAddress, setShowUserAddress] = useState(false);

  function clickHandler() {
    setShowUserAddress((prevState) => !prevState);
  }

  async function getUserData() {
    try {
      const userDetail = await fakeFetch02(`https://example.com/api/user`);

      setUserData(userDetail.data);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h2>Answer - 02</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        userData && (
          <>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <button onClick={clickHandler}>
              {showUserAddress ? "Hide" : "Show "} Address
            </button>
            {showUserAddress && (
              <>
                <p>{userData.address.street}</p>
                <p>{userData.address.suite}</p>
                <p>{userData.address.city}</p>
                <p>{userData.address.zipcode}</p>
              </>
            )}
          </>
        )
      )}
    </div>
  );
};

export default UserDetails;
