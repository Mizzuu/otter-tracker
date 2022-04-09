import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import "./App.scss";

function App() {
    return (
        <Router>
            <h1>Sea otter tracker</h1>
            <nav>
                <Link to="*" className="link">
                    Sea otter list
                </Link>
                <Link to="/collection" className="link">
                    Sea otter collection
                </Link>
            </nav>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
            </Routes>
        </Router>
    );
}

export default App;
