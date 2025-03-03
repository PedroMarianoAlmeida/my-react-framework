import { createRoot } from "react-dom/client";
import { SendingInputValueToLocalStorage } from "./../../components/example-pages/SendingInputValueToLocalStorage";

const rootElement = document.getElementById(
  "state-management-different-slots-local-storage-1"
);
createRoot(rootElement).render(
  <SendingInputValueToLocalStorage keyName="state-management-different-slots-local-storage-1" />
);
