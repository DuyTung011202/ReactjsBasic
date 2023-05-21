import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: {
        name: "",
        phone: "",
        email: "",
      },
      isValid: false,
      indexSelected: -1,
    };
  }
  handleChange = (e) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      },
      () => {
        this.handleValid();
      }
    );
  };
  handleValid = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({ isValid: value });
  };

  handleDelete = (index) => {
    const { studentList } = this.state;
    studentList.splice(index, 1);
    this.setState({
      studentList,
    });
  };
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: studentSelected,
      indexSelected: index,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, isValid, studentList, indexSelected } = this.state;
    if (isValid) {
      if (indexSelected > -1) {
        studentList.splice(indexSelected, 1);
        studentList.push(form);
      } else {
        studentList.push(form);
      }
      this.setState({
        studentList,
        form: {
          name: "",
          phone: "",
          email: "",
        },
        indexSelected: -1,
      });
    }
  };
  render() {
    const { studentList, form } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">Student List</h1>
        <form className="m-auto" style={{ maxWidth: 300 }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              name="name"
              id="name"
              value={form.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={form.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={this.handleChange}
            ></input>
          </div>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary w-100"
          >
            Submit
          </button>
        </form>

        <table className="table m-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => this.handleSelect(student, index)}
                      className="btn btn-primary me-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.handleDelete(index)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
