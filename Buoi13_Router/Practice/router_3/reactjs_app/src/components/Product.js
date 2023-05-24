import { useLocation } from "react-router-dom";

export default function Product() {
  let { state } = useLocation();
  console.log(useLocation);
  return (
    <div>
      <h3>Id selected {state.categoryId}</h3>
    </div>
  );
}
