import { createRoot } from "react-dom/client";
import { GithubReposClientWay } from "../../components/example-pages/GithubRepoClientWay";

const rootElement = document.getElementById("client-fetch-data");
createRoot(rootElement).render(<GithubReposClientWay />);
