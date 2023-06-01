import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../avatar/image.jpg";
export default function AddUser() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [imageURL, setImageURL] = useState(image);
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(`https://64745acf7de100807b1ab87d.mockapi.io/users`, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        image: imageURL,
      });
      resetForm();
      alert("Added user successfully!");
      setImageURL(image);
      navigate("/");
    } catch (err) {}
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
  };
  return (
    <div className="container">
      <h3>Add Contact</h3>

      <Formik
        initialValues={form}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        <Form style={{ maxWidth: 500 }}>
          <div className="mb-3">
            <img
              style={{ width: 40 }}
              src={imageURL}
              alt=""
              className="rounded-circle me-3"
              name="image"
            ></img>

            <Field
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="custom-file-label"
            />
            <ErrorMessage
              name="image"
              component={"span"}
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage
              name="name"
              component={"span"}
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component={"span"}
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <Field
              type="text"
              className="form-control"
              id="phone"
              name="phone"
            />
            <ErrorMessage
              name="phone"
              component={"span"}
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
