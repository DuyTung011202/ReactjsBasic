import { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { form: { name: "", author: "" } };
  }
  submit_sach = (e) => {
    e.preventDefault();
    this.props.submit_sach(this.state.form);
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  handleForm = (form) => {
    this.setState({ form: form });
  };
  render() {
    const { form } = this.state;
    return (
      <form onSubmit={this.submit_sach}>
        <div className="row">
          <div className="col">
            <input
              id="name"
              value={form.name}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Tên sách"
              name="name"
            />
          </div>
          <div className="col">
            <input
              id="author"
              value={form.author}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Tác giả"
              name="author"
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              {form.id === undefined ? "Thêm sách" : "Sửa sách"}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BookForm;
