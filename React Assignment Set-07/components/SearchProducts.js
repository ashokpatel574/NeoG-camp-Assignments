/*
Adding on to the previous question, Add a search bar to the component that allows users to filter the products by name. The search bar should update the list of displayed products in real-time as the user types. The search functionality should be case-insensitive.

*/

import React, { useState, useEffect } from "react";
import { fakeFetch10 } from "../contants";

const SearchProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showProductsDetails, setShowProductsDetails] = useState(false);
  const [errorList, setErrorList] = useState(null);

  function changeHandler(e) {
    const searchInput = e.target.value;
    setSearchText(searchInput);

    const matchProductsToDisplay = [...productsData].find((item) => {
      if (searchInput === "") {
        return;
      }
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    });
    matchProductsToDisplay
      ? setShowProductsDetails(matchProductsToDisplay)
      : setShowProductsDetails(false);
  }

  async function getProductsData() {
    try {
      const productsdetails = await fakeFetch10(
        `https://example.com/api/products`
      );

      setProductsData(productsdetails.data?.products);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h2>Answer - 10</h2>
      <h2>Products</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={searchText}
            placeholder={"Enter here"}
          />

          {showProductsDetails ? (
            <>
              <p>{showProductsDetails.name}</p>
              <p>Price: {showProductsDetails.price}</p>
              <p>Quantity: {showProductsDetails.quantity}</p>
              <p>Rating: {showProductsDetails.rating}</p>
            </>
          ) : searchText === "" ? (
            ""
          ) : (
            <p>Searched input doesn't exsits</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchProducts;
