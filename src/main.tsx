
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);