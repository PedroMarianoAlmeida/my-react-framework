import { hydrateRoot } from "react-dom/client";
import { useState } from "react";

function IncrementButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <span className="text-xl font-bold">Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = document.getElementById("about-slot-1");
hydrateRoot(root, <IncrementButton />);
