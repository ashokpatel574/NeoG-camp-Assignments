/*
Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch01 } from "../contants";

const Question01 = () => {
  const [userStatus, setUserStatus] = useState({ users: [], error: null });

  async function getUserStatus() {
    try {
      const userData = await fakeFetch01(
        "https://example.com/api/users/status"
      );
      setUserStatus({ users: userData?.data?.users, error: null });
    } catch (error) {
      setUserStatus({
        users: [],
        error: error,
      });
    }
  }

  useEffect(() => {
    getUserStatus();
  }, []);

  return (
    <div>
      <h2>Answer - 01</h2>
      <h3>Online Users</h3>

      {userStatus.error ? (
        <p>
          {userStatus.error?.status} {userStatus.error?.message}
        </p>
      ) : (
        userStatus.users?.map(({ name, status }, id) => (
          <div key={id}>
            <p style={{ color: status === "Online" ? "green" : "red" }}>
              {name} {status}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Question01;
