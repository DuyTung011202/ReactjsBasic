import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employee />} />
        <Route
          path="/employees/employeedetail/:employeeId"
          element={<EmployeeDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
