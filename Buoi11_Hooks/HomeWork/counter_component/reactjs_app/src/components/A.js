import useIncrement from "../hooks/Increase";
export default function ComponentA() {
  const [count, setCount] = useIncrement(1);
  return (
    <div>
      <p>Count 1: {count}</p>
      <button onClick={() => setCount(setCount)}>Increment</button>
    </div>
  );
}
