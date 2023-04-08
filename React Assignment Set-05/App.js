import React from "react";
import ReactDOM from "react-dom/client";

import Question01 from "./Components/Question01";
import Question02 from "./Components/Question02";
import Question03 from "./Components/Question03";
import Question04 from "./Components/Question04";
import Question05 from "./Components/Question05";
import Question06 from "./Components/Question06";
import Question07 from "./Components/Question07";

const App = () => {
  return (
    <div style={{ textAlign: "center", minHeight: "100vh" }}>
      <h1>React Practice set - 05</h1>

      <Question01 />
      <Question02 />
      <Question03 />
      <Question04 widthImg={"250px"} />
      <Question05 />
      <Question06 />
      <Question07 />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
