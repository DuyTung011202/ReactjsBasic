import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddBook = () => {
    navigate("/add");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          " https://647173a56a9370d5a41a5d30.mockapi.io/books"
        );
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        setBookList(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleEdit = (book) => {
    navigate(`/edit/${book.id}`, {
      state: {
        id: book.id,
        title: book.title,
        quantity: book.quantity,
      },
    });
  };
  const handleDelete = (book) => {
    const deleteData = async () => {
      try {
        await axios.delete(
          `https://647173a56a9370d5a41a5d30.mockapi.io/books/${book.id}`
        );
        setBookList((prevBooks) =>
          prevBooks.filter((item) => item.id !== book.id)
        );
        alert(`Deleted ${book.title} book`);
      } catch (err) {
        console.error(err);
      }
    };
    deleteData();
  };
  if (loading) return <Loading />;
  return (
    <div className="container mt-3">
      <div className="row justify-content-between mb-4">
        <h3 className="col-md-3">Library</h3>
        <button onClick={handleAddBook} className="btn btn-success col-md-2">
          Add a new Book
        </button>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(book)}
                      className="btn btn-primary me-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book)}
                      className="btn btn-danger"
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
    </div>
  );
}
