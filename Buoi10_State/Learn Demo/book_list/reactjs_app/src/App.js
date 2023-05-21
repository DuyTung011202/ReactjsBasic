import { Component } from "react";
import React from "react";
import BookTable from "./components/BookTable";
import BookForm from "./components/BookForm";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.formSach = React.createRef();
    this.state = {
      bookList: [
        { id: 1, name: "Book 1", author: "Tác giả 1" },
        { id: 2, name: "Book 2", author: "Tác giả 2" },
        { id: 3, name: "Book 3", author: "Tác giả 3" },
      ],
      item: {},
    };
  }
  xoa_sach = (id) => {
    this.setState({
      bookList: this.state.bookList.filter((item) => item.id !== id),
    });
  };
  sua_sach = (item) => {
    if (item.id !== this.state.item.id) {
      this.setState({
        item: item,
      });
      this.formSach.current.handleForm(item);
    } else {
      this.setState({
        item: {},
      });
      this.formSach.current.handleForm({ name: "", author: "" });
    }
  };
  submit_sach = (form) => {
    if (form.id === undefined) {
      const bookList = [...this.state.bookList];
      bookList.push({ ...form, id: Math.floor(Math.random() * 1000) });
      this.setState({ bookList: bookList });
    } else {
      const bookList = [...this.state.bookList];
      const index = bookList.findIndex((book) => book.id === form.id);
      bookList[index] = { ...form, id: form.id };
      this.setState({ bookList, item: {} });
    }
    this.formSach.current.handleForm({ name: "", author: "" });
  };
  render() {
    const { bookList, item } = this.state;
    return (
      <div className="container">
        <BookForm ref={this.formSach} submit_sach={this.submit_sach} />
        <BookTable
          sua_sach={this.sua_sach}
          xoa_sach={this.xoa_sach}
          booklist={bookList}
          choose_book={item}
        />
      </div>
    );
  }
}

export default App;
