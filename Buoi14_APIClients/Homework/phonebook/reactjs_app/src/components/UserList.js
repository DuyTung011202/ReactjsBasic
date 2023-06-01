import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://64745acf7de100807b1ab87d.mockapi.io/users"
        );
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        setUserList(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  const handleAdd = () => {
    navigate("/add");
  };
  const handleDelete = (user) => {
    const deleteData = async () => {
      try {
        await axios.delete(
          `https://64745acf7de100807b1ab87d.mockapi.io/users/${user.id}`
        );
        setUserList((prevBooks) =>
          prevBooks.filter((item) => item.id !== user.id)
        );
        alert(`Deleted ${user.name} book`);
      } catch (err) {
        console.error(err);
      }
    };
    deleteData();
  };
  const handleEdit = (user) => {
    console.log(user);
    navigate(`/edit/${user.id}`, {
      state: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        image: user.image,
      },
    });
  };
  if (loading) return <Loading />;
  return (
    <div className="container mt-3">
      <div className="row justify-content-between mb-4">
        <h3 className="col-md-3">Contact</h3>
        <button onClick={handleAdd} className="btn btn-success col-md-2">
          Add Contact
        </button>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      style={{ width: 50 }}
                      className="rounded-circle m-3 "
                      src={user.image}
                    ></img>
                    {user.name}
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.phone}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="btn btn-primary me-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
