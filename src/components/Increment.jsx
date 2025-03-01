import { useState } from "react";

export function IncrementButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>From Components folder ABC</p>
      <span className="text-xl font-bold">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
