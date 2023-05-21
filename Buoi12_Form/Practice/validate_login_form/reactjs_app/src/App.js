import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error",
  };
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };
  const handleChange = (e) => {
    let err = REGEX[e.target.name].test(e.target.value)
      ? ""
      : MESSAGE_ERROR[e.target.name];
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        error: err,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFilled =
      form.email && form.email.value && form.password && form.password.value;
    const isErrors = isFilled && (form.email.error || form.password.error);
    alert(
      isFilled && !isErrors ? "Login success" : "Please fill out all the fields"
    );
  };
  return (
    <div className="container App">
      <h1 className="text-center">Form Login</h1>
      <form>
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
              value={(form.email && form.email.value) || ""}
            ></input>
          </div>
          {form.email && form.email.error && (
            <p className="text-danger">Email error</p>
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
              value={(form.password && form.password.value) || ""}
            ></input>
          </div>
          {form.password && form.password.error && (
            <p className="text-danger">{form.password.error}</p>
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
