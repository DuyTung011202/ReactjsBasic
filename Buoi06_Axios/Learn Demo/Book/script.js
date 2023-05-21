const token = "eyJuYW1lIjoiXHUwMTEwXHUwMGUwbyBEdXkgVFx1MDBmOW5nIChSSjIzMDNSMSkifQ:xg9jkW1UgeH8duuv5D58heobc-L9DTzDpWxjXLdHEac"
const api = "http://api.iamdien.com:8000/book/"
let editMode = false;
let choose_book = null;

function create_table() {
    axios.get(`${api}?token=${token}`)
        .then(data => {
            const book_list = data.data.data
            const book_list_table = document.querySelector("#book_list")
            book_list_table.innerHTML = ""
            for (book of book_list) {
                const new_tr = document.createElement("tr")
                new_tr.innerHTML = `
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td><button onclick="editBook(${book.id})" class="btn btn-danger">Sửa</button></td>
                <td><button onclick="deleteBook(${book.id})" class="btn btn-danger">Xóa</button></td>
            `
                book_list_table.append(new_tr)
            }
        })
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
            create_table()
        })
}

function submit_sach(e, ele) {
    e.preventDefault()
    const input = ele.querySelectorAll("input")
    const name = input[0].value
    const author = input[1].value
    if (editMode) {
        console.log(choose_book)
        axios.put(`${api}?token=${token}&id=${choose_book}&name=${name}&author=${author}`)
            .then(data => {
                if (data.data == "") {
                    for (i of input) i.value = ""
                    create_table()
                    editMode = false;
                }
            })
    }
    else {
        axios.post(`${api}?token=${token}&name=${name}&author=${author}`)
            .then(data => {
                if (data.data == "") {
                    for (i of input) i.value = ""
                    create_table()
                }
            })
    }

}

create_table()

