import Home from "./components/home.js";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        isRememberMe: false,
      },
      isValid: false,
      isLoggedIn: false,
    };
  }
  handleChange = (event) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [event.target.name]: event.target.value,
        },
      },
      () => this.checkValid()
    );
  };

  handleChangeCheckBox = () => {
    this.setState(
      (state) => {
        const { form } = state;
        form.isRemember = !form.isRemember;
        return { form };
      },
      () => this.checkValid()
    );
  };
  checkValid = () => {
    const { email, password } = this.state.form;
    const value = email && password;
    this.setState({ isValid: value });
  };
  handleSubmit = () => {
    if (this.state.isValid) {
      this.setState({ isLoggedIn: true });
    }
  };
  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const { isLoggedIn, form } = this.state;
    if (isLoggedIn) return <Home logOut={this.handleLogOut}> </Home>;
    return (
      <div className="container mt-4 ">
        <form className="text-center m-auto" style={{ maxWidth: 300 }}>
          <img style={{ width: 150 }} src={logo} alt="logo" />
          <p className="fs-1">Please sign in </p>
          <input
            type="text"
            name="email"
            className="form-control py-3 mb-2"
            placeholder="Email address"
            required
            value={form.email}
            onChange={this.handleChange}
          ></input>
          <input
            type="password"
            name="password"
            className="form-control py-3"
            placeholder="Password"
            required
            value={form.password}
            onChange={this.handleChange}
          ></input>
          <div className="p-3">
            <input
              className="me-2"
              type="checkbox"
              id="save-user"
              value={form.isRememberMe}
              onChange={this.handleChangeCheckBox}
            ></input>
            <label htmlFor="save-user">Remember me</label>
          </div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary w-100 p-3"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default App;
