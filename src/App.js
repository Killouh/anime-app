import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

import Home from "./views/home/home";
import Trending from "./views/trending/trending";
import Watchlist from "./views/watchlist/watchlist";
import Settings from "./views/settings/settings";
import Itempage from './views/itempage/itempage';

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <div className="mainsidebar-container">
        <Sidebar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/anime/:id" element={<Itempage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
