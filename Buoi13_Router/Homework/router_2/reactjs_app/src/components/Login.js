import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });
  const handleSubmit = (values) => {
    navigate("/employees", {
      state: {
        email: values.email,
        password: values.password,
      },
    });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{ maxWidth: 500 }} className="container p-3">
          <h3 className="text-center p-3">Login Form</h3>
          <div class="mb-3 row">
            <label htmlFor="email" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <Field
                type="email"
                class="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component={"span"}
                className="text-danger"
              ></ErrorMessage>
            </div>
          </div>
          <div class="mb-3 row">
            <label htmlFor="password" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <Field
                type="password"
                class="form-control"
                id="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component={"span"}
                className="text-danger"
              ></ErrorMessage>
            </div>
          </div>
          <button type="submit" className="btn btn-primary offset-2">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
