import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
const token = "eyJuYW1lIjoiXHUwMTEwXHUwMGUwbyBEdXkgVFx1MDBmOW5nIChSSjIzMDNSMSkifQ:xg9jkW1UgeH8duuv5D58heobc-L9DTzDpWxjXLdHEac"
const api = "http://api.iamdien.com:8000/book/"
const root = ReactDOM.createRoot(document.getElementById('root'));
let choose_book = null
let editMode = false;

function render() {

  axios.get(`${api}?token=${token}`)
    .then(data => {
      const book_list = data.data.data
      console.log(book_list)
      root.render(
        <div className='container'>
          <div className="input-group mb-3">
            <input id="name" type="text" className="form-control " placeholder="Book's name"></input>
            <input id="author" type="text" className="form-control" placeholder="Book's author"></input>
            <button className="btn btn-outline-secondary" type="submit" id="button" onClick={submit_form}>Submit</button>
          </div>
          <table className="table" >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
              </tr>
            </thead>
            <tbody>
              {book_list.map(book => <tr key={book.id}>
                <th scope='row'>{book.id}</th>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td><button onClick={() => editBook(book.id)} className="btn btn-danger">Sửa</button></td>
                <td><button onClick={() => deleteBook(book.id)} className="btn btn-danger">Xóa</button></td>
              </tr>)}
            </tbody>

          </table>
        </div>
      )
    }
    )
}
function editBook(id) {
  choose_book = id
  let input = document.querySelectorAll("input")
  axios.get(`${api}?token=${token}&id=${id}`)
    .then((data) => {
      const books = data.data.data
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
          input[0].value = books[i].name
          input[1].value = books[i].author
          editMode = true;
        }
      }
    })



}

function deleteBook(id) {
  axios.delete(`${api}?token=${token}&id=${id}`)
    .then(() => {
      render()
    })
}


function submit_form() {
  const input = document.querySelectorAll("input")
  const name = input[0].value
  const author = input[1].value

  if (editMode) {
    axios.put(`${api}?token=${token}&id=${choose_book}&name=${name}&author=${author}`)
      .then(data => {
        if (data.data.id !== "") {
          for (let i of input) i.value = ""
          render()
          editMode = false;
        }
      })
  }
  else {
    axios.post(`${api}?token=${token}&name=${name}&author=${author}`)
      .then(data => {
        console.log(data)
        if (data.data.id !== "") {
          for (let i of input) i.value = ""
          render()
        }
      })
  }

}


render()
