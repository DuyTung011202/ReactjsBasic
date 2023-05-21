import { useState, useImperativeHandle, forwardRef } from "react";

const FormSach = forwardRef((props, ref) => {
  const [form, setForm] = useState({ name: "", author: "" });
  function submit_sach(e) {
    e.preventDefault();
    props.submit_sach(form);
  }
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  useImperativeHandle(ref, () => ({
    handleForm(form) {
      setForm(form);
    },
  }));
  return (
    <form onSubmit={submit_sach}>
      <div className="row">
        <div className="col">
          <input
            id="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Tên sách"
            name="name"
          />
        </div>
        <div className="col">
          <input
            id="author"
            value={form.author}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Tác giả"
            name="author"
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            {form.id === undefined ? "Thêm sách" : "Sửa sách"}
          </button>
        </div>
      </div>
    </form>
  );
});

export default FormSach;
