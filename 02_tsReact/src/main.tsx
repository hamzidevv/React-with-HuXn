import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyProvider from "./context/MyContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);
