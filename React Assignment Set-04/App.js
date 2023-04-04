import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./Data";
import TabComponent from "./Components/TabComponent";
import FontIncrementDecrement from "./Components/FontIncrementDecrement";
import FruitAndVegetables from "./Components/FruitAndVegetables";
import TodoList01 from "./Components/TodoList01";
import TodoList02 from "./Components/TodoList02";
import Books from "./Components/Books";
import Game from "./Components/Game";

const App = () => {
  const { characters, itemList, todoItems1, todoItems2, books } = Data;

  return (
    <div style={{ textAlign: "center", minHeight: "100vh" }}>
      <h1>React Practice set - 04</h1>

      <TabComponent characters={characters} />
      <FontIncrementDecrement />
      <FruitAndVegetables itemList={itemList} />
      <TodoList01 todoItems1={todoItems1} />
      <TodoList02 todoItems2={todoItems2} />
      <Books books={books} />
      <Game />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
