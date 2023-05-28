import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [listTodo, setListTodo] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: Math.floor(Math.random() * 100),
        id: Math.floor(Math.random() * 100),
        title: todo,
        completed: false,
      })
      .then((data) => {
        alert(`Create ${JSON.stringify(data.data)} success`);
        setTodo("");
      });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setListTodo(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="container App">
      <h2 className="text-center">Todo List</h2>
      <form>
        <input
          type="text"
          className="form-control"
          id="todo"
          name="todo"
          value={todo}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </form>

      <ul className="list-group mt-3">
        {listTodo.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
