import React from "react";

export default class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        description: "",
      },
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.form);
  };
  render() {
    const { form } = this.state;
    return (
      <div>
        <p>
          Tên:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tên của bạn"
            value={form.name}
            onChange={this.handleChange}
          ></input>
        </p>
        <p>
          Mô tả:
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Mô tả"
            value={form.description}
            onChange={this.handleChange}
          ></input>
        </p>
        <button type="submit" onClick={this.handleSubmit}>
          Lưu
        </button>
      </div>
    );
  }
}
