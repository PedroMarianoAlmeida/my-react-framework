import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadServerSlot path="/components/GithubRepos?name=devrodrigomolina" />
    </Suspense>
  );
}

const container = document.getElementById("example-react-server-with-props-2");
hydrateRoot(container, <App />);
