/*
Given an array of objects representing people who donated money to the NGO. Each object consists of: id, name, amount. Build a React component that takes the data as props and shows the total donation collected on the DOM. Output should be in the format: Total Donation Collected: _amount_

*/

import React from "react";

const DonationNGO = ({ donationData }) => {
  return (
    <div>
      <h2>Answer - 08</h2>

      <p>
        Total Donation Collected:-
        {donationData.reduce((acc, { Donation }) => acc + Donation, 0)}
      </p>
    </div>
  );
};

export default DonationNGO;
