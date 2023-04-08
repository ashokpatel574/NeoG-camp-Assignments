/*
Create a React component that fetches chat data from an API endpoint using useEffect hook and display chat data (name and chat message) as a list on the screen using the useState hook.

a. Show “Loading Chats…” until your data displays on the DOM.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch06 } from "../contants";

const Question06 = () => {
  const [userChatData, setUserChatData] = useState({
    chatData: [],
    error: null,
    isLoading: true,
  });

  async function getUserChatdata() {
    try {
      const chatDataDetails = await fakeFetch06(
        "https://example.com/api/userchat"
      );

      setUserChatData({
        chatData: chatDataDetails.data,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setUserChatData({
        chatData: [],
        error: error,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    getUserChatdata();
  }, []);

  return (
    <div>
      <h2>Answer - 06</h2>
      <ul>
        {userChatData.isLoading ? (
          <h3>Loading...</h3>
        ) : userChatData.error ? (
          <p>
            {userChatData.error.status} {userChatData.error.message}
          </p>
        ) : (
          userChatData.chatData?.map(({ name, messages }, id) => (
            <li key={id}>
              <h3>{`${name}'s Chat`}</h3>
              <ul>
                {messages?.map(({ from, message }, id) => (
                  <li key={id}>
                    <p>
                      <strong>{from}:</strong> {message}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question06;
