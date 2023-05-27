import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function UserDetail() {
  const [form, setForm] = useState({ name: "", birthday: "" });
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (id) {
      setForm({ name: state.name, birthday: state.birthday });
    }
  }, [id, state.name, state.birthday]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`https://647173a56a9370d5a41a5d30.mockapi.io/users/${id}`, form)
        .then((res) => {
          alert(`Edit user ${JSON.stringify(res.data)} successfully!!!`);
          navigate("/");
        });
    } else {
      axios
        .post("https://647173a56a9370d5a41a5d30.mockapi.io/users", form)
        .then((res) => {
          alert(`Create user ${JSON.stringify(res.data)} successfully!!!`);
          navigate("/");
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
    <div className="container p-3">
      <h3 className="text-center">UserDetail</h3>
      <form>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={handleChange}
              name="name"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="birthday" className="col-sm-2 col-form-label">
            Birthday
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="birthday"
              value={form.birthday}
              onChange={handleChange}
              name="birthday"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary offset-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
