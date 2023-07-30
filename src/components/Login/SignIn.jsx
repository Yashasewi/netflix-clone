import { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";

const SignIn = ({ email, setUserUid }) => {
    // references for email and password
    const mailRef = useRef(null);
    const passwordRef = useRef(null);
    const [SignUp, setSignUp] = useState(false);
    const [currentEmail, setCurrentEmail] = useState(email || ""); // Initialize the email state
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    // function to register the user with email and password in firebase
    const register = (e) => {
        e.preventDefault(); // to prevent the page from reloading

        // create the user with email and password in firebase
        createUserWithEmailAndPassword(
            auth,
            mailRef.current.value, // get the value of email from the reference
            passwordRef.current.value // get the value of password from the reference
        )
            .then(async (authUser) => {
                // if user is created successfully then log the user

                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        first: first_name,
                        last: last_name,
                        email: authUser.user.email,
                    });
                    setUserUid(docRef.id);
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

                console.log(authUser.user.email);
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
        signInWithEmailAndPassword(
            auth,
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
                        type="text"
                        placeholder="First Name"
                        className="signIn_input "
                        id="first_name"
                        style={{ display: SignUp ? "block" : "none" }}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="signIn_input "
                        id="last_name"
                        style={{ display: SignUp ? "block" : "none" }}
                        onChange={(e) => setLastName(e.target.value)}
                    />

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
                        onClick={SignUp ? register : signIn}
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
