/*
Create a React component that calls the product api and has the same number of buttons as the items in product. On Click of each button show the details of that card only. Example: In the below API we have three products and three buttons.Example

*/

import React, { useEffect, useState } from "react";
import { fakeFetch01 } from "../contants";

const Question01 = () => {
  const [productsItems, setProductsItems] = useState({
    data: [],
    filteredData: undefined,
    error: null,
  });

  function clickHandler(items) {
    setProductsItems({
      ...productsItems,
      filteredData: items,
    });
  }

  async function getProductInfo() {
    try {
      const productInfo = await fakeFetch01(`https://example.com/api/products`);

      setProductsItems({ data: productInfo.data?.products, error: null });
    } catch (error) {
      setProductsItems({ data: [], error: error });
    }
  }

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <div>
      <h2>Answer - 01</h2>

      <div>
        {productsItems.error ? (
          <p>
            {productsItems.error.status} {productsItems.error.message}
          </p>
        ) : (
          productsItems.data?.map((items, id) => (
            <button
              key={items.name.toString()}
              onClick={() => clickHandler(items, id)}
            >
              {`Show ${items.name} `}
            </button>
          ))
        )}
      </div>

      {productsItems.filteredData && (
        <div>
          <img
            src={productsItems.filteredData?.src}
            alt={productsItems.filteredData?.name}
          />
          <h3>
            <strong>Name:</strong> {productsItems.filteredData?.name}
          </h3>
          <p>
            <strong>Price:</strong> {productsItems.filteredData?.price}
          </p>
          <p>
            <strong>Description:</strong> {productsItems.filteredData?.desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question01;
