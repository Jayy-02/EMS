import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyForm from "./admin_page.jsx";
import App from "./App.jsx";
import Employee from "./emp_page.jsx"
import "./App.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<MyForm />} />
      </Routes>
      <Routes>
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
