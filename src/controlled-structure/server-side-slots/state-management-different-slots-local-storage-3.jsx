import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

const handleStorageChange = () => {
  function App() {
    // Here is actually 1, because is the key from slot 1
    const name = localStorage.getItem(
      "state-management-different-slots-local-storage-1"
    );
    const serverDomain = localStorage.getItem("SERVER_DOMAIN");

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoadServerSlot
          path={`/components/GithubRepos?name=${name}`}
          serverDomain={serverDomain}
        />
      </Suspense>
    );
  }

  const container = document.getElementById(
    "state-management-different-slots-local-storage-3"
  );
  hydrateRoot(container, <App />);
};

// This is also the name of custom event listen
window.addEventListener(
  "state-management-different-slots-local-storage-1",
  handleStorageChange
);
