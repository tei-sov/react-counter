import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Counter</h1>
      {/* <ClassCounter /> */}
      <FunctionalCounter />
    </div>
  );
}

export default App;
