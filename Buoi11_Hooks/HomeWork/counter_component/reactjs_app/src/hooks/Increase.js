import { useState } from "react";

export default function useIncrement(addAmount) {
  const [count, setCount] = useState(0);
  const increamentCount = () => {
    setCount(count + addAmount);
  };
  return [count, increamentCount];
}
