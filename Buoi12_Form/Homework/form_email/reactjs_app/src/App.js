import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Nhập email"),
  title: Yup.string().required("Nhập tiêu đề"),
  message: Yup.string().required("Nhập lời nhắn"),
});

function App() {
  return (
    <Formik
      initialValues={{ email: "", tittle: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={() => {
        alert("Sent successfully!!!");
      }}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <Field
            type="email"
            className="form-control"
            id="email"
            name="email"
          ></Field>
          <ErrorMessage
            name="email"
            component={"span"}
            className="text-danger"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <Field
            type="text"
            className="form-control"
            id="title"
            name="title"
          ></Field>
          <ErrorMessage
            name="title"
            component={"span"}
            className="text-danger"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <Field
            type="text"
            className="form-control"
            id="message"
            name="message"
            as="textarea"
          ></Field>
          <ErrorMessage
            name="message"
            component={"span"}
            className="text-danger"
          />
        </div>

        <div className="mb-3">
          <Field
            type="file"
            className="form-control"
            id="file"
            name="file"
          ></Field>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default App;
