import { createRoot } from "react-dom/client";
import { GithubReposClientWay } from "../../components/example-pages/GithubRepoClientWay";

const rootElement = document.getElementById(
  "state-management-different-slots-local-storage-2"
);

const handleStorageChange = () => {
  // Here is actually 1, because is the key from slot 1
  const user = localStorage.getItem(
    "state-management-different-slots-local-storage-1"
  );
  createRoot(rootElement).render(<GithubReposClientWay username={user} />);
};

// This is also the name of custom event listen
window.addEventListener("state-management-different-slots-local-storage-1", handleStorageChange);
