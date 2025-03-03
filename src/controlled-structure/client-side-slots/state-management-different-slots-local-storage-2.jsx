import { createRoot } from "react-dom/client";
import { GithubReposClientWay } from "../../components/example-pages/GithubRepoClientWay";

const rootElement = document.getElementById(
  "state-management-different-slots-local-storage-2"
);

console.log("state-management-different-slots-local-storage-2");
const user = localStorage.getItem(
  "state-management-different-slots-local-storage-1"
);
console.log({ user });
const handleStorageChange = () => {
  // Here is actually 1, because is the key from slot 1
  const user = localStorage.getItem(
    "state-management-different-slots-local-storage-1"
  );
  console.log({ user });
  createRoot(rootElement).render(<GithubReposClientWay username={user} />);
};

window.addEventListener("localStorageUpdate", handleStorageChange);
