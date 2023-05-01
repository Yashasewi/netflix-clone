import React from "react";

const SignIn = () => {
    return (
        <div className="ontop signIn">
            <div className="signIn_body">
                <h1>Sign In</h1>
                <form>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        type="submit"
                        className="signIn_button"
                    >
                        Sign In
                    </button>
                </form>

                <div className="signIn_help">
                    <div className="signIn_checkbox">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <span className="signIn_needHelp">Need help?</span>
                </div>

                <div className="signIn_text">
                    <p className="signIn_text1">
                        New to Netflix? <span>Sign up now.</span>
                    </p>
                    <p className="signIn_text2">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <span>Learn more</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
