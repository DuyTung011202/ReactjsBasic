import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  return (
    <div className="container App">
      <h1 className="text-center">Form Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {
          alert("Submit Success");
        }}
      >
        <Form>
          <div className="row mb-3">
            <label htmlFor="email" className=" col-form-label">
              Email
            </label>
            <div className="">
              <Field
                name="email"
                type="email"
                className="form-control"
                id="email"
              ></Field>
            </div>
            <ErrorMessage name="email" component="p" className="text-danger" />
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className=" col-form-label">
              Password
            </label>
            <div className="">
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              ></Field>
            </div>

            <ErrorMessage
              name="password"
              component="p"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
