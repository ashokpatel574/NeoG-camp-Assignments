import React from "react";
import ReactDOM from "react-dom/client";
import Question01 from "./React-Assignment-Question/Question-01/Question01";
import Question02 from "./React-Assignment-Question/Question-02/Question02";
import Question03 from "./React-Assignment-Question/Question-03/Question03";
import Question04 from "./React-Assignment-Question/Question-04/Question04";
import Question05 from "./React-Assignment-Question/Question-05/Question05";
import Question06 from "./React-Assignment-Question/Question-06/Question06";
import Question07 from "./React-Assignment-Question/Question-07/Question07";
import Question08 from "./React-Assignment-Question/Question-08/Question08";
import Question09 from "./React-Assignment-Question/Question-09/Question09";
import Question10 from "./React-Assignment-Question/Question-10/Question10";

const App = () => {
  return (
    <div>
      <h1>Functional Programming Set-05 React Solutions</h1>
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
