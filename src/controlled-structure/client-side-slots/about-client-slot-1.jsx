import { createRoot } from "react-dom/client";
import { IncrementButton } from "../../components/Increment";

const rootElement = document.getElementById("about-slot-1");
createRoot(rootElement).render(<IncrementButton />);
