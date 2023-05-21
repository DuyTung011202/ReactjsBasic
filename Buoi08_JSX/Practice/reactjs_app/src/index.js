import React from 'react';
import ReactDOM from 'react-dom/client';

// const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"]
// let list = <div>
//   <h1>List of fruits</h1>
//   <ul>
//     {fruits.map((fruit) => <li>{fruit}</li>)}
//   </ul>
// </div>
// ReactDOM.createRoot(document.getElementById("root")).render(list);



const root = ReactDOM.createRoot(document.getElementById("root"))

const tick = () => {
  root.render(<div>
    <h1>Hello, world!</h1>
    <h4>It is {new Date().toLocaleTimeString()}</h4>
  </div>)
}

setInterval(tick, 1000)

