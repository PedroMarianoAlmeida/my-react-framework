import { createRoot } from "react-dom/client";
import { Increment } from "../../components/example-pages/Increment";

const rootElement = document.getElementById("example-with-interactivity");
createRoot(rootElement).render(<Increment />);
