import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

function App() {
  const name = localStorage.getItem("name-example-react-server-with-props-5");

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

const container = document.getElementById("example-react-server-with-props-5");
hydrateRoot(container, <App />);
