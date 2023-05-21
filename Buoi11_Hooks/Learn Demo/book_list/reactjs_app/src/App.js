import { useState, useRef, useEffect } from "react";
import BookTable from "./components/BookTable";
import FormSach from "./components/FormSach";
import Loading from "./components/Loading";
import axios from "axios";

const token =
  "eyJuYW1lIjoiXHUwMTEwXHUwMGUwbyBEdXkgVFx1MDBmOW5nIChSSjIzMDNSMSkifQ:xg9jkW1UgeH8duuv5D58heobc-L9DTzDpWxjXLdHEac";

const api = "http://api.iamdien.com:8000/book/";
// const api = "http://api.iamdien.com:8000/delay_response"

function App() {
  const [bookList, setBookList] = useState([]);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const formRef = useRef();
  useEffect(() => {
    axios.get(`${api}?token=${token}`).then((res) => {
      setBookList(res.data.data);
      // setBookList([
      //   {id:1,name:"Book 1",author:"Tác giả 1"},
      //   {id:2,name:"Book 2",author:"Tác giả 2"},
      //   {id:3,name:"Book 3",author:"Tác giả 3"},
      // ])
      setLoading(false);
      //// B1: components render
      //// B2: chạy hàm trong useEffect
      //// B3: callAPI
      //// B4: có API ~~> setState
      //// B5: components render lại ~~> B1
    });
  }, []);
  //// tham số thứ 2 của hàm useEffect là 1 array chứa giá trị những state
  //// mà nếu state đó thay đổi thì hàm trong Effect mới chạy

  //// nếu truyền vào array rỗng ~~> không có biến nào thay đổi có thể làm
  //// hàm trong useEffect chạy ~~> hàm trong useEffect chỉ chạy 1 lần duy
  //// nhất khi vừa render components

  function xoa_sach(id) {
    setLoading(true);
    axios.delete(`${api}?token=${token}&id=${id}`).then((res) => {
      setBookList(bookList.filter((item) => item.id !== id));
      setLoading(false);
    });
  }
  function submit_sach(form) {
    setLoading(true);
    if (form.id !== undefined) {
      axios
        .put(
          `${api}?token=${token}&id=${form.id}&name=${form.name}&author=${form.author}`
        )
        .then((res) => {
          if (!("error" in res.data)) {
            const bList = [...bookList];
            const index = bookList.findIndex((item) => item.id === form.id);
            bList[index] = res.data.data[0];
            setBookList(bList);
            setItem({});
            formRef.current.handleForm({ name: "", author: "" });
            setLoading(false);
          }
        });
    } else {
      axios
        .post(`${api}?token=${token}&name=${form.name}&author=${form.author}`)
        .then((res) => {
          console.log(res.data);
          if (!("error" in res.data)) {
            setBookList([...bookList, res.data.data[0]]);
            formRef.current.handleForm({ name: "", author: "" });
            setLoading(false);
          }
        });
    }
  }
  function sua_sach(itemm) {
    if (itemm.id != item.id) {
      setItem({ ...itemm });
      formRef.current.handleForm({ ...itemm });
    } else {
      setItem({});
      formRef.current.handleForm({ name: "", author: "" });
    }
  }
  console.log("render");
  return (
    <div style={{ position: "relative" }}>
      {loading ? <Loading /> : null}
      <FormSach ref={formRef} submit_sach={submit_sach} />
      <BookTable
        xoa_sach={xoa_sach}
        sua_sach={sua_sach}
        bookList={bookList}
        choose_book={item}
      />
    </div>
  );
}

export default App;
