import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Registration from "./Registration.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <div className="overflow-y-hidden">
      <Registration />
    </div>
  </StrictMode>
);
