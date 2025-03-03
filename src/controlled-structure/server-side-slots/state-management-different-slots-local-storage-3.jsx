import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { LoadServerSlot } from "../../../_internal/components/LoadServerSlot";

const handleStorageChange = () => {
  // Here is actually 1, because is the key from slot 1
  const user = localStorage.getItem(
    "state-management-different-slots-local-storage-1"
  );

  function App() {
    const name = localStorage.getItem("state-management-different-slots-local-storage-1");
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

window.addEventListener("localStorageUpdate", handleStorageChange);
