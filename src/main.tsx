import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import faviconUrl from "./assets/favicon-32x32.png";

// Dynamically set favicon from Vite-processed asset
const ensureFavicon = () => {
  const linkEl = document.getElementById("favicon") as HTMLLinkElement | null;
  if (linkEl) {
    linkEl.href = faviconUrl;
  } else {
    const el = document.createElement("link");
    el.id = "favicon";
    el.rel = "icon";
    el.type = "image/png";
    el.href = faviconUrl;
    document.head.appendChild(el);
  }
};
ensureFavicon();
