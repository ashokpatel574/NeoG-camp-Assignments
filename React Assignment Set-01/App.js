import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./Data";
import Question01 from "./Components/Question01";
import Question02 from "./Components/Question02";
import Question03 from "./Components/Question03";
import Question04 from "./Components/Question04";
import Question05 from "./Components/Question05";
import Question06 from "./Components/Question06";
import Question07 from "./Components/Question07";
import Question08 from "./Components/Question08";
import Question09 from "./Components/Question09";
import Question10 from "./Components/Question10";
import Question11 from "./Components/Question11";

const App = () => {
  const {
    employeeCardData,
    colorStyle,
    items,
    imageWithCaption,
    products,
    student,
  } = Data;

  return (
    <div>
      <h1>React Practice set - 01</h1>
      <Question01 employeeCardData={employeeCardData} />
      <Question02 colorStyle={colorStyle} />
      <Question03 items={items} header={`Stationery Items`} />
      <Question04 imageWithCaption={imageWithCaption} />
      <Question05 products={products} />
      <Question06 products={products} />
      <Question07 student={student} />
      <Question08 />
      <Question09 />
      <Question10 />
      <Question11 />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
