import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";

import Login from "components/Login/Login";
import "./App.css";
import { useEffect } from "react";

import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "features/userSlice";
import Profile from "components/Profile/Profile";
import Movie from "components/Movies/Movie";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isUserLoggedIn = user ? true : false;
    const [userUid, setUserUid] = useState(null);
    console.log(isUserLoggedIn);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
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
                    <Route
                        path="/"
                        exact
                        element={<HomePage isUserLoggedIn={isUserLoggedIn} />}
                    />

                    <Route
                        path="/login"
                        element={
                            <Login
                                isUserLoggedIn={isUserLoggedIn}
                                userUid={userUid}
                                setUserUid={setUserUid}
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                isUserLoggedIn={isUserLoggedIn}
                                userUid={userUid}
                                setUserUid={setUserUid}
                            />
                        }
                    />
                    <Route path="/movie/:movie_id" element={<Movie />} />

                    <Route
                        path="*"
                        element={
                            <div className="error_page">
                                <div className="error_content">
                                    <h1 className="error_title">Oops!</h1>
                                    <p className="error_message">
                                        Something went wrong.
                                    </p>
                                    <p className="error_suggestion">
                                        Please try again later.
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
