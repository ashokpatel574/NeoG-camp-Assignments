/*
Create a React component that uses the useEffect hook to fetch the product data from the API endpoint using the fakeFetch function provided below. The component should use the useState hook to store the fetched data and a second state variable to store the sorted data. The sorted data should be sorted in descending order by rating.
*/

import React, { useState, useEffect } from "react";
import { fakeFetch09 } from "../contants";

const StoreProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [errorList, setErrorList] = useState(null);

  async function getProductsData() {
    try {
      const productsdetails = await fakeFetch09(
        `https://example.com/api/products`
      );

      const data = productsdetails.data.products;
      const sortByRating = [...data].sort((a, b) => b.rating - a.rating);

      setProductsData(sortByRating);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h2>Answer - 09</h2>
      <h2>Products</h2>

      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <ul>
          {productsData.length > 0 &&
            productsData?.map(({ name, price, quantity, rating }) => (
              <li
                key={name.toString()}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  margin: "10px",
                  border: "1px solid black",
                }}
              >
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Rating: {rating}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default StoreProducts;
