/*
Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

*/

import React, { useState } from "react";

const MyGadgets = ({ myGadgetsProducts }) => {
  const [highlightItems, setHighlightItems] = useState(false);

  function clickHandler() {
    setHighlightItems(true);
  }

  return (
    <div>
      <h2>Answer - 08</h2>

      <ol>
        {myGadgetsProducts.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={{
              backgroundColor: highlightItems && price > 5000 && `lightgreen`,
            }}
          >
            Name: {name}, Description:{description}, Price:{price}
          </li>
        ))}
      </ol>

      <button onClick={clickHandler}>Highlight Expensive Gadget</button>
    </div>
  );
};

export default MyGadgets;
