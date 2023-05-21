import { Formik } from "formik";
import { Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import MyField from "./MyField";

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

function validate(value) {
  const errors = {};
  if (!value.username) {
    errors["username"] = "Vui lòng điền username";
  } else if (!REGEX.email.test(value.username)) {
    errors["username"] = "Không đúng định dạng email";
  }
  if (!value.password) {
    errors["password"] = "Vui lòng điền password";
  }
  if (value.password !== value.passwordconfirm) {
    errors.passwordconfirm = "2 mật khẩu không giống nhau";
  }
  return errors;
}

function RegisterFormFormik2(props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordconfirm: "",
  });
  function onSubmit(value, { resetForm }) {
    console.log("làm gì đó 2");
    resetForm();
    setForm({ username: "", password: "", passwordconfirm: "" });
  }

  return (
    <>
      <Formik
        initialValues={form}
        validate={validate}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {/* nội dung bên trong 1 cái components thì nó cũng là props */}
        <Form>
          <MyField name="username" label="Username" className="form-control" />
          <MyField
            name="password"
            type="password"
            label="Password"
            className="form-control"
          />
          <MyField
            name="passwordconfirm"
            type="password"
            label="Password Confirm"
            className="form-control"
          />
          <button className="btn btn-info" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default RegisterFormFormik2;
