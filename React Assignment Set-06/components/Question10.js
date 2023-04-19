/*
Create a React component that calls the socialMedia profile api and when the page is loaded show details of the user and a button follow along with the name of the user on the button. On click of that increase the followers count by one and disable the button.
*/

import React, { useState, useEffect } from "react";
import { fakeFetch10 } from "../contants";
const Question10 = () => {
  const [socialMediaProfile, setSocialMediaProfile] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [followStatus, setFollowStatus] = useState(false);

  function clickHandler() {
    setSocialMediaProfile((prevState) => ({
      ...prevState,
      followers: prevState.followers + 1,
    }));
    setFollowStatus(!followStatus);
  }

  async function getSocialMediaProfile() {
    try {
      const socialMediaProfileDetails = await fakeFetch10(
        "https://example.com/api/profile"
      );

      setSocialMediaProfile(socialMediaProfileDetails.data?.profile);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getSocialMediaProfile();
  }, []);

  return (
    <div>
      <h2>Answer - 10</h2>
      <div>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          socialMediaProfile && (
            <>
              <h2>{socialMediaProfile?.name}</h2>
              <p>
                <strong>Age:</strong> {socialMediaProfile?.age}
              </p>
              <p>
                <strong>Gender:</strong> {socialMediaProfile?.gender}
              </p>
              <p>
                <strong>Email:</strong> {socialMediaProfile?.email}
              </p>
              <p>
                <strong>occupation:</strong> {socialMediaProfile?.occupation}
              </p>
              <p>
                <strong>followers:</strong> {socialMediaProfile?.followers}
              </p>
              <p>
                <strong>followedBys:</strong> {socialMediaProfile?.followedBy}
              </p>
            </>
          )
        )}
      </div>
      <button onClick={clickHandler} disabled={followStatus && true}>
        Follow {socialMediaProfile?.name}
      </button>
    </div>
  );
};

export default Question10;
