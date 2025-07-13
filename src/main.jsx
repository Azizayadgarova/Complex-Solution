import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./store.jsx";
import './i18n';
import { AdminProvider } from "./context/AdminContext"; // ✅ Qo‘shildi

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider> {/* ✅ Qo‘shildi */}
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);
