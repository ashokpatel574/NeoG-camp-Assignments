import React from "react";
import ReactDOM from "react-dom/client";

import Weather from "./components/Weather";
import UserDetails from "./components/UserDetails";
import MoviesList from "./components/MoviesList";
import UserDetails02 from "./components/UserDetails02";
import Quotes from "./components/Quotes";
import MoviesList02 from "./components/MoviesList02";
import Ecommerce from "./components/Ecommerce";
import Ecommerce02 from "./components/Ecommerce02";
import StoreProducts from "./components/StoreProducts";
import SearchProducts from "./components/SearchProducts";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        maxWidth: "850px",
        margin: `0 auto`,
      }}
    >
      <h1>React Practice set - 07</h1>
      <Weather />
      <UserDetails />
      <MoviesList />
      <UserDetails02 />
      <Quotes />
      <MoviesList02 />
      <Ecommerce />
      <Ecommerce02 />
      <StoreProducts />
      <SearchProducts />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
