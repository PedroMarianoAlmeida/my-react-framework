import { hydrateRoot } from "react-dom/client";
import { IncrementButton } from "../../components/Increment";

const root = document.getElementById("about-slot-1");
hydrateRoot(root, <IncrementButton />);
