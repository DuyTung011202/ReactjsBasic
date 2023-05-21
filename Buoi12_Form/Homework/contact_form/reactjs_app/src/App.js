import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    quantity: Yup.number().required("Required"),
  });

  return (
    <div className="container App">
      <h1 className="text-center">Contact form</h1>
      <Formik
        initialValues={{
          name: "",
          quantity: 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {
          alert("Submit Success");
        }}
      >
        <Form>
          <div className="row mb-3">
            <label htmlFor="name" className=" col-form-label">
              Tiêu đề
            </label>

            <Field name="name" type="text" className="form-control" id="name" />
            <ErrorMessage
              name="name"
              component="p"
              className="text-danger m-0"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="quantity" className="col-form-label">
              Số lượng
            </label>

            <Field
              name="quantity"
              type="number"
              className="form-control"
              id="quantity"
            />

            <ErrorMessage
              name="quantity"
              component="p"
              className="text-danger m-0"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
