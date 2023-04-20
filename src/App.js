import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "components/Login/Login";
import "./App.css";

function App() {
    return (
        // router for creating the router
        <div className="App">
            <Router>
                {/* routes for creating routes and we use routes instead
                 of switch in v6 */}
                <Routes>
                    {/* route to define the route  */}
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
