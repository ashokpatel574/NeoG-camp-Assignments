/*

Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

Data:

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

*/

import React from "react";

const UserProfile = ({ user }) => {
  const { name, age, email } = user;
  return (
    <div>
      <h2>Answer - 03</h2>
      <p>Name: {name}</p>
      <p>Age:{age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
