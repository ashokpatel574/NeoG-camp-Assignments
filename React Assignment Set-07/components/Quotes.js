/*
Create a component that displays a random quote from an API using the useEffect and useState hooks. The component should fetch a new quote when the user clicks a button.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch05 } from "../contants";

const Quotes = () => {
  const [quotesData, setQuotesData] = useState({});
  const [errorList, setErrorList] = useState(null);

  function clickHandler() {
    getQuotesData();
  }

  async function getQuotesData() {
    try {
      const randomQuote = await fakeFetch05();
      setQuotesData(randomQuote);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getQuotesData();
  }, []);

  return (
    <div>
      <h2>Answer - 05</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        quotesData && (
          <>
            <p>{quotesData.content}</p>
            <p>{quotesData.author}</p>
            <button onClick={clickHandler}>New Quotes</button>
          </>
        )
      )}
    </div>
  );
};

export default Quotes;
