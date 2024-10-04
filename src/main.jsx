import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/home.page.jsx";
import BlogsPage from "./pages/blog.page.jsx";
import RootLayout from "./layouts/root.layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
