import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="loginPage">
            <nav className="loginNav">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix logo"
                    className="netflix_logo"
                />
                <button className="loginButton">Sign In</button>
            </nav>
            <div className="login_gradient"/>
        </div>
    );
}

export default Login;
