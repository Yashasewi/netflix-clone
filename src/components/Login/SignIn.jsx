import { useRef } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
    const mailRef = useRef(null);
    const passwordRef = useRef(null);

    // 
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            mailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            mailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            }
        );
    };
    return (
        <div className="ontop signIn">
            <div className="signIn_body">
                <h1>Sign In</h1>
                <form>
                    <input
                        ref={mailRef}
                        type="email"
                        placeholder="Email or phone number"
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
                        New to Netflix?{" "}
                        <span onClick={register}>Sign up now.</span>
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
