import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function AddBook() {
  const [form, setForm] = useState({ title: "", quantity: 0 });
  const navigate = useNavigate();
  const { state } = useLocation();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    quantity: Yup.number()
      .required("Require")
      .min(1, "Quantity must be greater than 0"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.put(
        ` https://647173a56a9370d5a41a5d30.mockapi.io/books/${state.id}`,
        {
          title: values.title,
          quantity: values.quantity,
        }
      );
      resetForm();
      alert("Edited book");
      navigate("/");
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div className="container">
      <h3>Edit Book</h3>
      <Formik
        initialValues={{ title: state.title, quantity: state.quantity }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        <Form style={{ maxWidth: 500 }}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tittle
            </label>
            <Field
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
            <ErrorMessage
              name="title"
              component={"span"}
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <Field
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
            />
            <ErrorMessage
              name="quantity"
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
