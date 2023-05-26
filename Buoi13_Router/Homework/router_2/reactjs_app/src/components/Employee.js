import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Employee() {
  let navigate = useNavigate();
  const { state } = useLocation();
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];

  const handleDetails = (item) => {
    navigate(`/employees/employeedetail/${item.id}`, {
      state: {
        name: item.name,
        age: item.age,
      },
    });
  };
  return (
    <div>
      <h3>Bạn đã đăng nhập</h3>
      <h5>Email: {state.email}</h5>
      <h5>Password: {state.password}</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>
                  <button
                    onClick={() => handleDetails(employee)}
                    className="btn btn-success"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
