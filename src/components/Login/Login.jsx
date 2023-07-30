import "./Login.css";
import { useLayoutEffect, useState } from "react";
import SighIn from "./SignIn";
import { useNavigate } from "react-router-dom";

function Login({ isUserLoggedIn, userUid, setUserUid }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    useLayoutEffect(() => {
        if (isUserLoggedIn) {
            return navigate("/");
        }
    }, [isUserLoggedIn, navigate]);

    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginPage">
            <nav className="loginNav">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix logo"
                    className="netflix_logo"
                />
                <button onClick={() => setSignIn(true)} className="loginButton">
                    Sign In
                </button>
            </nav>
            <div className="login_gradient" />
            {signIn ? (
                <SighIn
                    email={email}
                    userUid={userUid}
                    setUserUid={setUserUid}
                />
            ) : (
                <div className="login_body ontop">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>
                    <div className="login_input">
                        <form>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                            />
                            <button
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEmail(
                                        document.getElementById("email").value
                                    );
                                    setSignIn(true);
                                }}
                                className="login_getStarted"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
