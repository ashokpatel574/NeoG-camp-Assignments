/*
Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

a. Add a button, on click of which it displays only the items with more than 20 as quantity.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch02 } from "../contants";

const Question02 = () => {
  const [products, setProducts] = useState({ product: [], error: null });

  function clickHandler() {
    const newProductsList = products.product?.filter(
      (item) => item.quantity > 20
    );
    setProducts({ product: newProductsList, error: null });
  }

  async function getProductsDetails() {
    try {
      const productsDetails = await fakeFetch02(
        `https://example.com/api/products`
      );
      setProducts({ product: productsDetails?.data.products, error: null });
    } catch (error) {
      return setProducts({ product: [], error: error });
    }
  }

  useEffect(() => {
    getProductsDetails();
  }, []);

  return (
    <div>
      <h2>Answer - 02</h2>
      <h3>Products</h3>
      <button onClick={clickHandler} disabled={products.error ? true : false}>
        Show products with more than 20 as quantity
      </button>
      <ul>
        {products.error ? (
          <p>
            {products.error?.status} {products.error?.message}
          </p>
        ) : (
          products.product?.map(({ name, price, quantity }, id) => (
            <li key={id}>
              {name} - Rs.{price} - Quantity: {quantity}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question02;
