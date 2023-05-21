import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container m-5">
    <div className="card">
      <div className="card-header" />
      <img
        className="avatar position-absolute text-center rounded-circle"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="avatar"
      />
      <div className="card-body p-3 text-center d-flex justify-content-center align-items-center">
        <div>
          <h2 className="text-header py-2 ">Ruma Khan</h2>
          <p className="text-sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button className="btn btn-info">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
