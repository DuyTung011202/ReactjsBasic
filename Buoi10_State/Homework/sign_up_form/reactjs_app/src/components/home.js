import React from "react";

export default class Home extends React.Component {
  componentWillUnmount() {
    alert("Component will be unmounted");
  }
  render() {
    return (
      <div className="text-center">
        <h1>Welcome</h1>
        <button className="btn btn-success" onClick={this.props.logOut}>
          Log Out
        </button>
      </div>
    );
  }
}
