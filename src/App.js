import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import GiftPage from "./components/giftPage";
import GiftDetailPage from "./components/giftDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gifts" element={<GiftPage />} />{" "}
        <Route path="/gift-detail/:points" element={<GiftDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
