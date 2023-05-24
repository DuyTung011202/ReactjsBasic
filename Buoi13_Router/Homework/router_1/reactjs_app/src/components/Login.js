import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    navigate("/home", {
      state: { email: values.email, password: values.password },
    });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="container p-3 " style={{ maxWidth: 500 }}>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
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
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component={"span"}
                className="text-danger"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success offset-2">
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
}
