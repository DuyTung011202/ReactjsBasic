import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev - 1;
        if (newCount === 0) {
          clearInterval(interval);
          alert("Time's up!");
        }
        return newCount;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <p>Count down from {count} </p>
    </div>
  );
}

export default App;
