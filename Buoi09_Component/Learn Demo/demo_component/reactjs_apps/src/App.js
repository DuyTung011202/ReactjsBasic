import React from "react";
import HandleClick from "./Test.js";
export default function App({ render }) {
  function Parent(firstNumber, secondNumber) {
    console.log("Result:", firstNumber + secondNumber);
  }
  return (
    <div className="App">
      <h1>
        <HandleClick onData={Parent} />
      </h1>
    </div>
  );
  render()
}