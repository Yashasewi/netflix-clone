import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "components/Login/Login";
import "./App.css";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "features/userSlice";
import Profile from "components/Profile/Profile";

function App() {
    const dispatch = useDispatch();
    // const user = {
    //     name : "test"
    // };
    const user = useSelector(selectUser);
    // const user = null;
    const isUserLoggedIn = user ? true : false;
    // console.log(isUserLoggedIn);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // console.log(authUser);
                // console.log(`user is logged in as ${authUser.email}`);
                dispatch(
                    login({
                        uid: authUser.uid,
                        email: authUser.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        // router for creating the router
        <div className="App">
            <Router>
                {/* routes for creating routes and we use routes instead
                 of switch in v6 */}
                <Routes>
                    {/* route to define the route  */}
                    <Route path="/" exact element={<HomePage />} />
                    <Route
                        path="/login"
                        element={<Login isUserLoggedIn={isUserLoggedIn} />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
