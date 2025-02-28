import { useState } from "react";

export function IncrementButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <p>From Components folder</p>
      <span className="text-xl font-bold">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
