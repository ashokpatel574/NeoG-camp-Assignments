/*
Create a React component that fetches a list of users from an API endpoint using useEffect hook and displays the name, email, and website of each user on the screen using the useState hook. Add a dropdown which filters the users by company name.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch04 } from "../contants";

const UserDetails02 = () => {
  const [userData, setUserData] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [userDataByCompany, setUserDataByCompany] = useState([]);

  function changeHandler(e) {
    const filteredByCompanyName = userData.filter(
      ({ company }) => company === e.target.value
    );

    e.target.value === `All companies`
      ? setUserDataByCompany([...userData])
      : setUserDataByCompany(filteredByCompanyName);
  }

  async function getUserData() {
    try {
      const userDetail = await fakeFetch04(`https://example.com/api/users`);

      setUserData(userDetail.data);
      setUserDataByCompany(userDetail.data);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h2>Answer - 04</h2>
      <h2>Users</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        userData && (
          <>
            <label htmlFor="CompanyList Dropbox">Filter by company: </label>
            <select id="CompanyList Dropbox" onChange={(e) => changeHandler(e)}>
              <option value="All companies">All companies</option>
              <option value="ABC Inc">ABC Inc</option>
              <option value="XYZ Corp">XYZ Corp</option>
              <option value="ACME Corp">ACME Corp</option>
            </select>

            <ul>
              {userDataByCompany.length > 0 &&
                userDataByCompany?.map(({ name, email, website, company }) => (
                  <li key={email.toString()}>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Webiste: {website}</p>
                    <p>Company: {company}</p>
                  </li>
                ))}
            </ul>
          </>
        )
      )}
    </div>
  );
};

export default UserDetails02;
