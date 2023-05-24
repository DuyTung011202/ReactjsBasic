import React from "react";
import { useLocation } from "react-router-dom";
export default function Home() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Thông tin đăng nhập</h1>
      <p>Account: {state.email} </p>
      <p>Password: {state.password} </p>
    </div>
  );
}
