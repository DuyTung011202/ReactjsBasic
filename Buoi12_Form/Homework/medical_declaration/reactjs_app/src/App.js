import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  identification: Yup.number().required("Required"),
  dateOfBirth: Yup.date()
    .required("Required")
    .min(new Date(1900, 0, 1), "Year of birth must be greater than 1900"),
  gender: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
  hasBHYT: Yup.boolean().required("Required"),
  province: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  ward: Yup.string().required("Required"),
  detailAddress: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

function App() {
  return (
    <div style={{ maxWidth: 500 }} className="container ">
      <h1 className="text-center">Tờ khai y tế</h1>
      <Formik
        initialValues={{
          name: "",
          identification: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          hasBHYT: false,
          province: "",
          district: "",
          ward: "",
          detailAddress: "",
          phone: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={() => {
          alert("Success!");
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Họ tên:
            </label>
            <Field
              type="name"
              className="form-control"
              id="name"
              name="name"
            ></Field>
            <ErrorMessage
              name="name"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="identification" className="form-label">
              Số hộ chiếu / CMND:
            </label>
            <Field
              type="number"
              className="form-control"
              id="identification"
              name="identification"
            ></Field>
            <ErrorMessage
              name="identification"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Năm sinh:
            </label>
            <Field
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            ></Field>
            <ErrorMessage
              name="dateOfBirth"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <label className="px-2">
              <Field type="radio" name="gender" id="gender" value="men" />
              Nam
            </label>
            <label className="px-2">
              <Field type="radio" name="gender" id="gender" value="women" />
              Nữ
            </label>
            <ErrorMessage
              name="gender"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nationality" className="form-label">
              Quốc tịch:
            </label>
            <Field
              type="text"
              className="form-control"
              id="nationality"
              name="nationality"
            ></Field>
            <ErrorMessage
              name="nationality"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Công ty làm việc:
            </label>
            <Field
              type="text"
              className="form-control"
              id="company"
              name="company"
            ></Field>
            <ErrorMessage
              name="company"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Bộ phận làm việc:
            </label>
            <Field
              type="text"
              className="form-control"
              id="department"
              name="department"
            ></Field>
            <ErrorMessage
              name="department"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hasBHYT" className="form-label">
              Có thẻ bảo hiểm y tế:
            </label>
            <Field type="checkbox" id="hasBHYT" name="hasBHYT"></Field>
            <ErrorMessage
              name="hasBHYT"
              className="text-danger"
              component={"span"}
            />
          </div>
          <h5>Địa chỉ liên lạc tại Việt Nam</h5>

          <div className="mb-3">
            <label htmlFor="province" className="form-label">
              Tỉnh thành:
            </label>
            <Field
              type="text"
              className="form-control"
              id="province"
              name="province"
            ></Field>
            <ErrorMessage
              name="province"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="district" className="form-label">
              Quận / huyện:
            </label>
            <Field
              type="text"
              className="form-control"
              id="district"
              name="district"
            ></Field>
            <ErrorMessage
              name="district"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ward" className="form-label">
              Phường / xã:
            </label>
            <Field
              type="text"
              className="form-control"
              id="ward"
              name="ward"
            ></Field>
            <ErrorMessage
              name="ward"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="detailAddress" className="form-label">
              Số nhà, phố, tổ dân phố / thôn / đội :
            </label>
            <Field
              type="text"
              className="form-control"
              id="detailAddress"
              name="detailAddress"
            ></Field>
            <ErrorMessage
              name="detailAddress"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Điện thoại:
            </label>
            <Field
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              min="0"
            ></Field>
            <ErrorMessage
              name="phone"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
            ></Field>
            <ErrorMessage
              name="email"
              className="text-danger"
              component={"span"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="travel" className="form-label fw-bold">
              Trong vòng 14 ngày qua, Anh / Chị có đến quốc gia, vùng lãnh thổ
              nào (Có thể đi qua nhiều quốc gia):
            </label>
            <Field
              className="w-100"
              id="travel"
              name="travel"
              as="textarea"
            ></Field>
            <ErrorMessage
              name="travel"
              className="text-danger"
              component={"span"}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signal" className="form-label fw-bold">
              Trong 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiệu nào sau
              đây không:
            </label>
            <div>
              <Field type="checkbox" id="signal" name="fever"></Field>
              Sốt
            </div>
            <div>
              <Field type="checkbox" id="signal" name="cough"></Field>
              Ho
            </div>
            <div>
              <Field type="checkbox" id="signal" name="stuffy"></Field>
              Khó thở
            </div>
            <div>
              <Field type="checkbox" id="signal" name="pneumonia"></Field>
              Viêm phổi
            </div>
            <div>
              <Field type="checkbox" id="signal" name="sore_throat"></Field>
              Đau họng
            </div>
            <div>
              <Field type="checkbox" id="signal" name="tired"></Field>
              Mệt mỏi
            </div>

            <ErrorMessage
              name="hasBHYT"
              className="text-danger"
              component={"span"}
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

export default App;
