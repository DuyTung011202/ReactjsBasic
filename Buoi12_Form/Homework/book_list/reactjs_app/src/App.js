import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import { useState } from "react";
function App() {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({});
  const handleFormSubmit = (form) => {
    if (book.id === undefined) {
      const newBook = { ...form, id: Math.floor(Math.random() * 100) };
      setBookList([...bookList, newBook]);
    } else {
      const newBookList = [...bookList];
      const bookIndex = bookList.findIndex((book) => book.id === form.id);
      newBookList[bookIndex] = { ...form, id: book.id };
      setBookList(newBookList);
    }
  };
  console.log(book);
  const handleEditBook = (bookData) => {
    if (book.id !== bookData.id) {
      setBook(bookData);
    } else {
      setBook({});
    }
  };

  const handleDeleteBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };
  return (
    <div className="container App">
      <h1 className="text-center">Contact form</h1>
      <BookForm onSubmit={handleFormSubmit} choose_book={book} />
      <BookTable
        bookList={bookList}
        handleEditBook={handleEditBook}
        handleDeleteBook={handleDeleteBook}
        choose_book={book}
      />
    </div>
  );
}

export default App;
