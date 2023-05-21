import { useState, useEffect } from "react";
import InpuTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [listTodo, setListTodo] = useState(() => {
    const storageListTodo = JSON.parse(localStorage.getItem("listTodo"));
    return storageListTodo || [];
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setListTodo((prev) => {
        const newListTodo = [inputValue, ...prev];
        const jsonListTodo = JSON.stringify(newListTodo);
        localStorage.setItem("listTodo", jsonListTodo);
        return newListTodo;
      });
      setInputValue("");
    } else {
      alert("Please input a value");
    }
  };

  const handeClick = (e) => {
    e.target.classList.toggle("checked");
  };

  const handleDelete = (work) => {
    setListTodo(listTodo.filter((item) => item !== work));
  };

  return (
    <div className="container  App">
      <InpuTodo
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ListTodo
        listTodo={listTodo}
        handeClick={handeClick}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
