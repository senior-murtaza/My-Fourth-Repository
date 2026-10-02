import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import tailwindcss from "@tailwindcss/vite";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./House";
import Form from "./App";
import Card from "./Cards";
import Navigation from "./Navigation";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Card />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
);