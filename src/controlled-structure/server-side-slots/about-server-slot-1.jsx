import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadServerSlot path="/components/FromServerNoProps" />
    </Suspense>
  );
}

const container = document.getElementById("about-slot-2");
hydrateRoot(container, <App />);
