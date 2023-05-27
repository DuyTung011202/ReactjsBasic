import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/userdetail/:id" element={<UserDetail></UserDetail>} />
      <Route path="/userdetail/add" element={<UserDetail></UserDetail>} />
    </Routes>
  );
}

export default App;
