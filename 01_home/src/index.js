import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function timeFunc() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

setInterval(timeFunc, 1000);
