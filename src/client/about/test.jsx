import { hydrateRoot } from "react-dom/client";
console.log("JSX FILE");
const root = document.getElementById("about-slot-1");
hydrateRoot(root, <p>Client side</p>);
