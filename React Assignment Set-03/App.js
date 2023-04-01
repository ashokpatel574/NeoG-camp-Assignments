import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./Data";
import Question01 from "./Components/Question01";
import Cartoon01 from "./Components/Cartoon01";
import Cartoon02 from "./Components/Cartoon02";
import Cartoon03 from "./Components/Cartoon03";
import Vegatables from "./Components/Vegatables";
import Bouquets from "./Components/Bouquets";
import Bouquet02 from "./Components/Bouquet02";
import DonationNGO from "./Components/DonationNGO";
import Cars from "./Components/Cars";
import StudentsMarks from "./Components/StudentsMarks";

const App = () => {
  const {
    imageData,
    cartoons,
    vegetables,
    bouquet,
    bouquet02,
    donationData,
    cars,
    studentData,
  } = Data;

  return (
    <div>
      <h1>React Practice set - 03</h1>

      <Question01 imageData={imageData} />
      <Cartoon01 cartoons={cartoons} />
      <Cartoon02 cartoons={cartoons} />
      <Cartoon03 cartoons={cartoons} intelligence={`Intelligence`} />
      <Vegatables vegetables={vegetables} freshDate={`2023-03-30`} />
      <Bouquets bouquet={bouquet} />
      <Bouquet02 bouquet02={bouquet02} />
      <DonationNGO donationData={donationData} />
      <Cars cars={cars} />
      <StudentsMarks studentData={studentData} />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
