import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const MESSAGE_ERROR = {
    name: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Password must be the same",
  };

  const REGEX = {
    name: /^[a-zA-Z0-9_-]{3,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/,
  };
  const handleChange = (event) => {
    let error = "";
    const fieldName = event.target.name;

    if (fieldName === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          event.target.value === form.confirmPassword.value
            ? ""
            : MESSAGE_ERROR[fieldName];
      } else {
        error =
          REGEX[fieldName] && REGEX[fieldName].test(event.target.value)
            ? ""
            : MESSAGE_ERROR[fieldName];
      }
    } else if (fieldName === "confirmPassword") {
      error =
        event.target.value === form.password.value
          ? ""
          : MESSAGE_ERROR[fieldName];
    } else {
      error = REGEX[fieldName].test(event.target.value)
        ? ""
        : MESSAGE_ERROR[fieldName];
    }

    setForm({
      ...form,
      [fieldName]: { value: event.target.value, error: error },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFilled =
      form.name &&
      form.name.value &&
      form.email &&
      form.email.value &&
      form.password &&
      form.password.value &&
      form.confirmPassword &&
      form.confirmPassword.value;
    const isError =
      isFilled &&
      (form.name.error ||
        form.email.error ||
        form.password.error ||
        form.confirmPassword.error);

    alert(
      isFilled && !isError
        ? "Sign up successfully!!!"
        : "Please fill out all the fields!!!"
    );
  };
  return (
    <div className="container App">
      <h1 className="text-center">Form Signup</h1>
      <form>
        <div className="row mb-3">
          <label htmlFor="text" className=" col-form-label">
            Username
          </label>
          <div className="">
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              value={form.name.value}
            ></input>
          </div>
          {form.name.value && form.name.error && (
            <p className="text-danger mb-0">{form.name.error}</p>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className=" col-form-label">
            Email
          </label>
          <div className="">
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={form.email.value}
            ></input>
          </div>
          {form.email.value && form.email.error && (
            <p className="text-danger mb-0">{form.email.error}</p>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className=" col-form-label">
            Password
          </label>
          <div className="">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password.value}
            ></input>
          </div>
          {form.password.value && form.password.error && (
            <p className="text-danger mb-0">{form.password.error}</p>
          )}
        </div>
        <div className="row mb-3">
          <label htmlFor="confirmPassword" className="col-form-label">
            Confirm Password
          </label>
          <div className="">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={form.confirmPassword.value}
            ></input>
          </div>
          {form.confirmPassword.value && form.confirmPassword.error && (
            <p className="text-danger mb-0">{form.confirmPassword.error}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default App;
