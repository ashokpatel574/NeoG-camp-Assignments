/*
In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.
*/

import React, { useEffect, useState } from "react";
import { fakeFetch02 } from "../contants";

const Question03 = () => {
  const [products, setProducts] = useState({
    productAll: [],
    filteredProducts: [],
    error: null,
    isLoading: true,
  });

  function clickHandlerQuantity() {
    const newProductsList = products.productAll?.filter(
      (item) => item.quantity > 20
    );

    setProducts({
      ...products,
      filteredProducts: newProductsList,
    });
  }

  function clickHandlerPrice() {
    const newProductsList = products.productAll?.filter(
      (item) => item.price < 100
    );
    setProducts({
      ...products,
      filteredProducts: newProductsList,
    });
  }

  async function getProductsDetails() {
    try {
      const productsDetails = await fakeFetch02(
        `https://example.com/api/products`
      );

      setProducts({
        productAll: productsDetails?.data.products,
        filteredProducts: productsDetails?.data.products,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setProducts({
        productAll: [],
        filteredProducts: [],
        error: error,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    getProductsDetails();
  }, []);

  return (
    <div>
      <h2>Answer - 03</h2>
      <h3>Products</h3>
      <button
        onClick={clickHandlerQuantity}
        disabled={products.error ? true : false}
      >
        Show products with more than 20 as quantity
      </button>
      <button
        onClick={clickHandlerPrice}
        disabled={products.error ? true : false}
      >
        Show products with price less than 100
      </button>
      <ul>
        {products.isLoading ? (
          <h3>Loading....</h3>
        ) : products.error ? (
          <p>
            {products.error.status} {products.error.message}
          </p>
        ) : (
          products.filteredProducts?.map(({ name, price, quantity }, id) => (
            <li key={id}>
              {name} - Rs.{price} - Quantity: {quantity}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Question03;
