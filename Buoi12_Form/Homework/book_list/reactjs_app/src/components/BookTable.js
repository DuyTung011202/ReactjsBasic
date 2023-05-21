function BookTable({
  bookList,
  handleEditBook,
  handleDeleteBook,
  choose_book,
}) {
  const handleEdit = (book) => {
    handleEditBook(book);
  };
  const handleDelete = (id) => {
    handleDeleteBook(id);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {bookList.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  className={
                    choose_book.id === book.id
                      ? "btn btn-primary"
                      : "btn btn-info"
                  }
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default BookTable;
