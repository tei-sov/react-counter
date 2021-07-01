import React, { useState } from "react";
import "./style.css";

function FunctionalCounter() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  let handleminus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button className="firstbox" onClick={handleClick}>
        Add
      </button>
      <button className="secondbox" onClick={handleminus}>
        Subtract
      </button>
    </div>
  );
}

export default FunctionalCounter;
