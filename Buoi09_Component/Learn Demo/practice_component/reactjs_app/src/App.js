import { Component } from "react";
import A from "./components/A.js";
import B from "./components/B";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 0, info: {} };
  }
  clickHandle = (e) => {
    this.setState({
      status: { 1: 0, 0: 1 }[this.state.status],
    });
  };
  onSubmit = (form) => {
    this.setState({ info: form });
  };
  render() {
    return (
      <>
        <button onClick={this.clickHandle}>Click Me</button>
        {this.state.status == 0 ? (
          <A userInfo={this.state.info} />
        ) : (
          <B onSubmit={this.onSubmit} />
        )}
      </>
    );
  }
}

export default App;
