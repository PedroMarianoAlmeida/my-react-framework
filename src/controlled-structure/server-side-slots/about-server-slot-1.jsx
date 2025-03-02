import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LazyWelcome } from "../../components/AboutFetchSlot";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyWelcome path="/components/FromServerNoProps" />
    </Suspense>
  );
}

const container = document.getElementById("about-slot-2");
hydrateRoot(container, <App />);
