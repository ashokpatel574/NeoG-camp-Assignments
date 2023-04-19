/*
Create a React component that calls the habit tracker api and display only the habits which are unarchived with heading “Unarchived”. Create a show archive button and on click of show archive button show the archive habits and hide the unarchives. Change the heading of the page to “Archived” when the button is clicked
*/

import React, { useEffect, useState } from "react";
import { fakeFetch06 } from "../contants";

const Question06 = () => {
  const [habitTrackerList, setHabitTrackerList] = useState([]);
  const [filteredHabitTrackerList, setFilteredTrackerList] = useState([]);
  const [isArchived, setIsArchived] = useState(false);
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {
    isArchived
      ? setFilteredTrackerList(
          habitTrackerList.filter(({ archived }) => !archived)
        )
      : setFilteredTrackerList(
          habitTrackerList.filter(({ archived }) => archived)
        );
    setIsArchived(() => !isArchived);
  }

  async function getHabitTrackerData() {
    try {
      const habitTrackerData = await fakeFetch06(
        `https://example.com/api/habits`
      );

      setHabitTrackerList(habitTrackerData.data?.habits);
      const unArchivedData = habitTrackerData.data?.habits.filter(
        ({ archived }) => !archived
      );
      setFilteredTrackerList(unArchivedData);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getHabitTrackerData();
  }, []);

  return (
    <div>
      <h2>Answer - 06</h2>

      <h3>{isArchived ? "Archived" : "UnArchived"}</h3>
      <div>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          filteredHabitTrackerList?.map(
            ({ title, desc, daysFollowed, daysSkipped }) => (
              <div key={title.toString()}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>
                  <strong>Days Followed</strong> {daysFollowed}
                </p>
                <p>
                  <strong>Days Skipped</strong> {daysSkipped}
                </p>
                <hr />
              </div>
            )
          )
        )}
      </div>
      <button onClick={clickHandler}>
        {isArchived ? "Show UnArchives" : "Show Archives"}
      </button>
    </div>
  );
};

export default Question06;
