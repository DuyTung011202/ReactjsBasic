import FormSach from './components/FormSach';
import BookTable from './components/BookTable';

const L_book = [
  { id: 1, name: "Book 1", author: "Tác giả 1" },
  { id: 2, name: "Book 2", author: "Tác giả 2" },
  { id: 3, name: "Book 3", author: "Tác giả 3" },
]



var item_1 = {}

function App(props) {
  const render = props.render
  function get_value_1(value) {
    console.log("đây là dữ liệu trên thằng App là cha của Booktable từ con Booktable", value)
    if (item_1.id == value.id) item_1 = {}
    else item_1 = { ...value }
    render()
  }

  //abc
  return (
    <>
      <FormSach booklist={L_book} render={render} value={item_1} />
      <BookTable booklist={L_book} render={render} choose_book={item_1} get_value={get_value_1} />

    </>
  );
}

export default App;