/*
Build a game component in React where the player has a certain number of lives. Display the current number of lives and allows the player to decrement the number of lives by one with a button click. Once the number of lives reaches zero, display a "Game Over" message.

*/

import React, { useState } from "react";

const Game = () => {
  const [count, setCount] = useState(3);

  const clickhandler = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      <h2>Answer - 07</h2>

      <p>Current Lives: {count}</p>
      <button onClick={() => clickhandler()}>Lose a life</button>
      <h4>{!count && `Game Over`}</h4>
    </div>
  );
};

export default Game;
