import { createRoot } from "react-dom/client";
import { GithubUserReposFinder } from "../../components/example-pages/GithubUserReposFinder";

const rootElement = document.getElementById(
  "state-management-same-client-slot"
);
createRoot(rootElement).render(<GithubUserReposFinder />);
