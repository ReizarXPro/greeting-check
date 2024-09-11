import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting name="Rammeh" />
    </div>
  );
}

export default App;
