/*
Adding on to the previous question, There should be three buttons for this purpose: "Low to High", "High to Low", and "Reset". When the user clicks on "Low to High", the products should be sorted by price in ascending order. When the user clicks on "High to Low", the products should be sorted by price in descending order. When the user clicks on "Reset", the products should be displayed in their original order.
*/

import React, { useState, useEffect } from "react";
import { fakeFetch08 } from "../contants";

const Ecommerce02 = () => {
  const [productsData, setProductsData] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [sortByPrice, setSortByPrice] = useState([]);

  function clickHandler(sortByValue) {
    const sortLowtoHigh = [...productsData].sort((a, b) => a.price - b.price);
    const sortHightoLow = [...productsData].sort((a, b) => b.price - a.price);

    sortByValue === "LH"
      ? setSortByPrice(sortLowtoHigh)
      : sortByValue === "HL"
      ? setSortByPrice(sortHightoLow)
      : setSortByPrice(productsData);
  }

  async function getProductsData() {
    try {
      const userDetail = await fakeFetch08(`https://example.com/api/products`);

      setProductsData(userDetail.data?.products);
      setSortByPrice(userDetail.data?.products);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h2>Answer - 08</h2>
      <h2>Products</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <>
          {sortByPrice.length > 0 && (
            <>
              <button onClick={() => clickHandler("LH")}>
                Sort by Price low to high
              </button>
              <button onClick={() => clickHandler("HL")}>
                Sort by Price high to low
              </button>
              <button onClick={() => clickHandler("Reset")}>Reset</button>
              <ul>
                {sortByPrice?.map(({ name, description, price, quantity }) => (
                  <li key={name.toString()}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>${price}</p>
                    <p>Quantity: {quantity}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Ecommerce02;
