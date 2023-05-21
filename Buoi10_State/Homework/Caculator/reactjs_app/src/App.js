import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number_1: "",
      number_2: "",
      result: "",
    };
  }
  handleNumber1Change = (event) => {
    this.setState({ number_1: event.target.value });
  };
  handleNumber2Change = (event) => {
    this.setState({ number_2: event.target.value });
  };
  handleSum = () => {
    const { number_1, number_2 } = this.state;
    const result = parseInt(number_1) + parseInt(number_2);
    this.setState({ result: result });
  };
  handleSub = () => {
    const { number_1, number_2 } = this.state;
    const result = parseInt(number_1) - parseInt(number_2);
    this.setState({ result: result });
  };
  handleMul = () => {
    const { number_1, number_2 } = this.state;
    const result = parseInt(number_1) * parseInt(number_2);
    this.setState({ result: result });
  };
  handleDiv = () => {
    const { number_1, number_2 } = this.state;
    const result = parseInt(number_1) / parseInt(number_2);
    this.setState({ result: result });
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="number1">Số thứ nhất</label>
          <input
            type="email"
            className="form-control"
            id="number1"
            placeholder="Nhập số thứ nhất"
            value={this.state.number_1}
            onChange={this.handleNumber1Change}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="number2">Số thứ hai</label>
          <input
            type="email"
            className="form-control"
            id="number2"
            placeholder="Nhập số thứ hai"
            value={this.state.number_2}
            onChange={this.handleNumber2Change}
          ></input>
        </div>
        <h6>Result: {this.state.result}</h6>
        <button
          onClick={this.handleSum}
          type="button"
          className="btn btn-primary me-3"
        >
          +
        </button>
        <button
          onClick={this.handleSub}
          type="button"
          className="btn btn-primary me-3"
        >
          -
        </button>
        <button
          onClick={this.handleMul}
          type="button"
          className="btn btn-primary me-3"
        >
          *
        </button>
        <button
          onClick={this.handleDiv}
          type="button"
          className="btn btn-primary"
        >
          /
        </button>
      </div>
    );
  }
}

export default App;
