import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "components/Login/Login";
import "./App.css";

function App() {
    // const user = {
    //     name : "test"
    // };
    const user = null;
    return (
        // router for creating the router
        <div className="App">
            <Router>
                {/* routes for creating routes and we use routes instead
                 of switch in v6 */}
                <Routes>
                    {/* route to define the route  */}
                    {
                        // if user is not logged in then redirect to login page
                        !user ? (
                            <Route path="/Login" element={<Login />} />
                        ) : (
                            // if user is logged in then redirect to home page
                            <Route path="/" exact element={<HomePage />} />
                        )
                    }
                </Routes>
            </Router>
        </div>
    );
}

export default App;
