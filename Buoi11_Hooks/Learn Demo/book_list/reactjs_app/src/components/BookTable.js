function BookTable(props) {
  const { bookList, choose_book } = props;
  function sua_sach(e, item) {
    props.sua_sach(item);
  }
  function xoa_sach(e, id) {
    props.xoa_sach(id);
  }
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
        {bookList.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>
              <button
                onClick={(e) => {
                  sua_sach(e, item);
                }}
                className={
                  choose_book.id == item.id ? "btn btn-primary" : "btn btn-info"
                }
              >
                Sửa
              </button>
              <button
                onClick={(e) => {
                  xoa_sach(e, item.id);
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

export default BookTable;
