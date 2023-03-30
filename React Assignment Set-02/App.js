import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./Data";
import Greeting from "./Components/Greeting";
import Product from "./Components/Product";
import UserProfile from "./Components/UserProfile";
import Gadgets from "./Components/Gadgets";
import Phones from "./Components/Phones";
import Article from "./Components/Article";
import About from "./Components/About";
import MyGadgets from "./Components/MyGadgets";
import ColorPicker from "./Components/ColorPicker";
import Todo from "./Components/Todo";

// Question -06 data

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

// Question -07 data

const heading = "About Me";
const name = "Ashok"; // you can put your name
const learning = "I am learning React JS currently at neoG Camp.";

const App = () => {
  const { userData, products, productsPhone, myGadgetsProducts, todoItems } =
    Data;

  return (
    <div>
      <h1>React Practice set - 02</h1>

      <Greeting name={`Ashok`} />
      <Product name={`Shoes`} price={250} />
      <UserProfile user={userData} />
      <Gadgets products={products} />
      <Phones productsPhone={productsPhone} />
      <Article title={title} content={content} />
      <About name={name} learning={learning} heading={heading} />
      <MyGadgets myGadgetsProducts={myGadgetsProducts} />
      <ColorPicker />
      <Todo todoItems={todoItems} />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
