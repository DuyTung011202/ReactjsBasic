import React from "react";
import { useNavigate } from "react-router-dom";
export default function Category() {
  let navigate = useNavigate();
  const senDataToProduct = (e) => {
    navigate(`/products`, { state: { categoryId: e.target.value } });
  };
  return (
    <div>
      <h2>Select a Category:</h2>
      <select
        defaultValue="default"
        onChange={(value) => senDataToProduct(value)}
      >
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </div>
  );
}
