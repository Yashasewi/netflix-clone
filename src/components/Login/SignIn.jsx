import { useRef, useState } from "react";
import { auth } from "../../firebase";

const SignIn = ({ email }) => {
    // references for email and password
    const mailRef = useRef(null);
    const passwordRef = useRef(null);
    const [SignUp, setSignUp] = useState(false);
    const [currentEmail, setCurrentEmail] = useState(email || ""); // Initialize the email state
    // function to register the user with email and password in firebase
    const register = (e) => {
        e.preventDefault(); // to prevent the page from reloading

        // create the user with email and password in firebase
        auth.createUserWithEmailAndPassword(
            mailRef.current.value, // get the value of email from the reference
            passwordRef.current.value // get the value of password from the reference
        )
            .then((authUser) => {
                // if user is created successfully then log the user
                console.log(authUser);
            })
            .catch((error) => {
                // if there is any error then alert the error
                alert(error.message);
            });
        setSignUpFun();
    };

    // function to sign in the user with email and password in firebase
    const signIn = (e) => {
        e.preventDefault(); // to prevent the page from reloading

        // sign in the user with email and password in firebase
        auth.signInWithEmailAndPassword(
            mailRef.current.value, // get the value of email from the reference
            passwordRef.current.value // get the value of password from the reference
        )
            .then((authUser) => {
                // if user is signed in successfully then log the user
                console.log(authUser);
            })
            .catch((error) => {
                // if there is any error then alert the error
                alert(error.message);
            });
    };

    const setSignUpFun = () => {
        setSignUp(!SignUp);
    };

    const handleEmailChange = (e) => {
        setCurrentEmail(e.target.value); // Update the email state on input changes
    };
    console.log(SignUp);

    return (
        <div className="ontop signIn">
            <div className="signIn_body">
                {/* <h1>Sign In</h1> */}
                <h1>{SignUp ? " Sign Up" : "Sign In"}</h1>
                <form>
                    <input
                        ref={mailRef}
                        type="email"
                        placeholder="Email or phone number"
                        value={currentEmail} // Bind the state variable to the input
                        onChange={handleEmailChange} // Handle input changes
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        onClick={signIn}
                        type="submit"
                        className="signIn_button"
                    >
                        {SignUp ? " Sign Up" : "Sign In"}
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
                        New to Netflix?{" "}
                        <span onClick={SignUp ? register : setSignUpFun}>
                            Sign up now.
                        </span>
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
