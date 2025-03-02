import { useState } from "react";

export function Increment() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>I am a interactive Component</p>
      <span className="text-xl font-bold">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
