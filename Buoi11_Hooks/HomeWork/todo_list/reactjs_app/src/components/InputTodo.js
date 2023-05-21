export default function InpuTodo({ inputValue, handleChange, handleSubmit }) {
  return (
    <div className="row p-4  bg-danger">
      <h4 className="text-white text-center">My To Do List</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title..."
          value={inputValue}
          onChange={handleChange}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
