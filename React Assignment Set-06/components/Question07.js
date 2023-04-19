/*
Create a React component that calls the projects api and list all the projects when the page loads with titles and description. Create buttons saying “Show Details” for each project. On click of the button show title, description, technologies, completed of that project only.

*/

import React, { useEffect, useState } from "react";
import { fakeFetch07 } from "../contants";

const Question07 = () => {
  const [projectData, setProjectData] = useState([]);
  const [showDetails, setShowDetails] = useState([]);
  const [errorList, setErrorList] = useState(null);

  function clickHandler(index) {
    const updatedArray = [...showDetails].map((item, id) => {
      return id === index && !showDetails[id];
    });
    setShowDetails(updatedArray);
  }

  async function getProjectsData() {
    try {
      const projectDetails = await fakeFetch07(
        "https://example.com/api/projects"
      );
      const data = projectDetails.data?.projects;
      setProjectData(data);
      setShowDetails(new Array(data.length).fill(false));
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getProjectsData();
  }, []);

  return (
    <div>
      <h2>Answer - 07</h2>
      <h2>Projects</h2>

      <div>
        {errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          projectData?.map(
            ({ title, description, technologies, completed }, id) => (
              <div key={title.toString()}>
                <p>
                  <strong>Name:</strong>
                  {title}
                </p>
                <p>
                  <strong>Description:</strong>
                  {description}
                </p>
                {showDetails[id] && (
                  <>
                    <p>
                      <strong>technologies:</strong>
                      {technologies.join(", ")}
                    </p>
                    <p>
                      <strong>Completed:</strong>
                      {`${completed}`}
                    </p>
                  </>
                )}
                <button onClick={() => clickHandler(id)}>
                  {showDetails ? "Hide Details" : "Show Details"}
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Question07;
