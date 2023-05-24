import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
