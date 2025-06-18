// src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Personalities from "./pages/Personalities";
import Companies from "./pages/Companies";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/personalities">Top Personalities</Link>
        <Link to="/companies">Top Companies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/personalities" element={<Personalities />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
}
