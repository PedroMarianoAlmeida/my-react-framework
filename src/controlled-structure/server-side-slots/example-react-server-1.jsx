import React from "react";
import { createRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  return (
    <LoadServerSlot
      path="/components/FromServerNoProps"
      serverDomain={window.SERVER_DOMAIN}
    />
  );
}

const container = document.getElementById("example-react-server-1");
// Clear the container to avoid hydrating stale markup
container.innerHTML = "";
const root = createRoot(container);
root.render(<App />);
