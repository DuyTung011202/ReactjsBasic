import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome.js";

export default function ListTodo({ listTodo, handeClick, handleDelete }) {
  return (
    <div className="row">
      <ul className="list-group p-0">
        {listTodo.map((item, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center  "
            onClick={handeClick}
          >
            <div>
              <FontAwesomeIcon icon="check" className="px-2 check-icon" />
              {item}
            </div>
            <div
              onClick={() => {
                handleDelete(item);
                console.log(item);
              }}
            >
              <FontAwesomeIcon icon="close" className="px-2 close-icon p-2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
