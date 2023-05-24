import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
