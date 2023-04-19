import React from "react";
import ReactDOM from "react-dom/client";
import Question01 from "./components/Question01";
import Question02 from "./components/Question02";
import Question03 from "./components/Question03";
import Question04 from "./components/Question04";
import Question05 from "./components/Question05";
import Question06 from "./components/Question06";
import Question07 from "./components/Question07";
import Question08 from "./components/Question08";
import Question09 from "./components/Question09";
import Question10 from "./components/Question10";

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
      <h1>React Practice set - 06</h1>

      <Question01 />
      <Question02 />
      <Question03 />
      <Question04 />
      <Question05 />
      <Question06 />
      <Question07 />
      <Question08 />
      <Question09 />
      <Question10 />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
