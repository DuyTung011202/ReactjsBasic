import useIncrement from "../hooks/Increase";
export default function ComponentB() {
  const [count, setCount] = useIncrement(2);
  return (
    <div>
      <p>Count 2: {count}</p>
      <button onClick={() => setCount(setCount)}>Increment</button>
    </div>
  );
}
