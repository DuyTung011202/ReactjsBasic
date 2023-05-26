import React from "react";
import { useParams, useLocation } from "react-router-dom";
export default function EmployeeDetail() {
  const { state } = useLocation();
  return (
    <div className="container text-center ">
      <h3>EmployeeDetail</h3>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}
