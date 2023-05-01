import "./Login.css";
import { useState } from "react";
import SighIn from "./SignIn";

function Login() {
    const [signIn, setsignIn] = useState(false);
    return (
        <div className="loginPage">
            <nav className="loginNav">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix logo"
                    className="netflix_logo"
                />
                <button onClick={() => setsignIn(true)} className="loginButton">
                    Sign In
                </button>
            </nav>
            <div className="login_gradient" />
            {signIn ? (
                <SighIn />
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
                            <input type="email" placeholder="Email address" />
                            <button
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setsignIn(true);
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
