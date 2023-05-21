import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };
  handleAddItem = (event) => {
    event.preventDefault();

    if (this.state.item !== "") {
      this.setState({
        list: [...this.state.list, this.state.item],
        item: "",
      });
    }
  };
  render() {
    const { list, item } = this.state;
    return (
      <div style={{ margin: "auto" }} className="container">
        <form>
          <h1>Todo List</h1>
          <input
            type="text"
            name="job"
            value={item}
            onChange={this.handleChange}
          ></input>
          <button type="submit" onClick={this.handleAddItem}>
            Add
          </button>
        </form>
        <div>
          <ul>
            {list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
