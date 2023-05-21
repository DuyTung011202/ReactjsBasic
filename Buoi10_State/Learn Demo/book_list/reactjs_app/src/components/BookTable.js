import { Component } from "react";

class BookTable extends Component {
  constructor(props) {
    super(props);
  }
  xoa_sach = (e, id) => {
    this.props.xoa_sach(id);
  };
  sua_sach = (e, item) => {
    this.props.sua_sach(item);
  };
  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.booklist.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>
                <button
                  onClick={(e) => {
                    this.sua_sach(e, item);
                  }}
                  className={
                    this.props.choose_book.id == item.id
                      ? "btn btn-primary"
                      : "btn btn-info"
                  }
                >
                  Sửa
                </button>
                <button
                  onClick={(e) => {
                    this.xoa_sach(e, item.id);
                  }}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BookTable;
