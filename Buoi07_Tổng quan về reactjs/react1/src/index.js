import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let c = 0

function click() {
  c += 1;
  render()
}

function render() {
  const element = <div>
    <button onClick={click}>Click me!</button>
    <h4>{c}</h4>
  </div>
  root.render(element);
}

render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
