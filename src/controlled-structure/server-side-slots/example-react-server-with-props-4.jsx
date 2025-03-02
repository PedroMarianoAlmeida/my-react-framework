import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  if (name === null)
    return (
      <p>
        Add <b>name</b> param on query
      </p>
    );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadServerSlot path={`/components/GithubRepos?name=${name}`} />
    </Suspense>
  );
}

const container = document.getElementById("example-react-server-with-props-4");
hydrateRoot(container, <App />);
