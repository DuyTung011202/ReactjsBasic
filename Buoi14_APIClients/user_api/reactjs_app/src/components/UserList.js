import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function UserList() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  console.log(users);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://647173a56a9370d5a41a5d30.mockapi.io/users"
        );
        await new Promise((resolve) => setTimeout(resolve, 3000));
        if (isMounted) {
          setUsers(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const editUser = (user) => {
    navigate(`/userdetail/${user.id}`, {
      state: {
        id: user.id,
        name: user.name,
        birthday: user.birthday,
      },
    });
  };
  const addUser = () => {
    navigate(`/userdetail/add`);
  };
  if (loading) return <h1 className="text-center">Loading</h1>;
  return (
    <div className="container App">
      <h1 className="text-center">Users</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              editUser(user);
            }}
            className="list-group-item"
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={addUser} type="submit" className="btn btn-primary mt-2">
        Create
      </button>
    </div>
  );
}
