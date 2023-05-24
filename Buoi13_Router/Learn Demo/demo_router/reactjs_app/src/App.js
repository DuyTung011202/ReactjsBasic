import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About.js";
export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React router</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
