/*
Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.


*/

import React, { useState } from "react";

const TabComponent = ({ characters }) => {
  const [character, setCharacter] = useState([]);

  return (
    <div>
      <h2>Answer - 01</h2>

      <div>
        <button onClick={() => setCharacter(characters.heroes)}>
          Show Heroes
        </button>
        <button onClick={() => setCharacter(characters.villains)}>
          Show Villains{" "}
        </button>
      </div>

      <ul>
        {character.length > 0 &&
          character.map(({ name, powers, costume }, id) => (
            <li key={id}>
              <p>{name}</p>
              <p>Powers: {powers}</p>
              <p>Costume: {costume}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TabComponent;
