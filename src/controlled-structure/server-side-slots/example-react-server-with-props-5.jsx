import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  const name = localStorage.getItem("name-example-react-server-with-props-5");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadServerSlot
        path={`/components/GithubRepos?name=${name}`}
        serverDomain={window.SERVER_DOMAIN}
      />
    </Suspense>
  );
}

const container = document.getElementById("example-react-server-with-props-5");
hydrateRoot(container, <App />);
