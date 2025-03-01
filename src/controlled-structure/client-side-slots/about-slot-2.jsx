import { createRoot } from "react-dom/client";
import { HydratedComponent } from "./../../components/AboutFetchSlot";

const rootElement = document.getElementById("about-slot-2");
createRoot(rootElement).render(
  <HydratedComponent serverUrl={window.SERVER_DOMAIN} />
);
