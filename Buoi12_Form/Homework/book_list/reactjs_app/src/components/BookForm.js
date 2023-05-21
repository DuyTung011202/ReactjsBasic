import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
const BookForm = ({ onSubmit, choose_book }) => {
  const [form, setForm] = useState({
    name: "",
    quantity: 0,
  });
  useEffect(() => {
    if (choose_book) {
      setForm(choose_book);
    }
  }, [choose_book]);
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
    setForm({ name: "", quantity: 0 });
  };

  const handleValidate = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "Required";
    }
    if (value.quantity === 0) {
      errors.quantity = "Quantity must be greater than zero";
    }
    return errors;
  };
  return (
    <div>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <div className="row mb-3">
            <label htmlFor="name" className=" col-form-label">
              Tiêu đề
            </label>
            <Field name="name" type="text" className="form-control" id="name" />
            <ErrorMessage name="name" component={"p"} className="text-danger" />
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
              min="0"
            />
            <ErrorMessage
              name="quantity"
              component={"p"}
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
};

export default BookForm;
