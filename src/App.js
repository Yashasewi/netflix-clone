import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "components/Login/Login";
import "./App.css";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
    // const user = {
    //     name : "test"
    // };
    const user = null;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                console.log("user is logged in");
            } else {
                console.log("user is logged out");
            }
        });
        return unsubscribe;
    }, []);

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
