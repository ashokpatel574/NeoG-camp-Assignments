/*
Create a React component that fetches a list of products from an e-commerce API endpoint using useEffect hook and displays the product name, description, price, and quantity on the screen using the useState hook. Add a button which allows the user to sort the products by price (lowest to highest).

*/

import React, { useState, useEffect } from "react";
import { fakeFetch07 } from "../contants";

const Ecommerce = () => {
  const [productsData, setProductsData] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [sortByPrice, setSortByPrice] = useState([]);

  function clickHandler() {
    const sortLowtoHigh = productsData.sort((a, b) => a.price - b.price);
    setSortByPrice([...sortLowtoHigh]);
  }

  async function getProductsData() {
    try {
      const userDetail = await fakeFetch07(`https://example.com/api/products`);

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
      <h2>Answer - 07</h2>
      <h2>Products</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <>
          {sortByPrice.length > 0 && (
            <>
              <button onClick={clickHandler}>Sort by Price low to high</button>
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

export default Ecommerce;
