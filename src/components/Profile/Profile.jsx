import Nav from "components/Home/NavBar/Nav";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile({ isUserLoggedIn, setUserUid, userUid }) {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    console.log(user);
    useEffect(() => {
        if (!isUserLoggedIn) {
            return navigate("/login");
        } else {
        }
    }, [isUserLoggedIn, navigate]);
    const SignOut = () => {
        auth.signOut().then(() => {
            navigate("/login");
        });
    };

    return (
        <div className="profile_screen">
            <Nav />
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img
                        className="profile_info_avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="profile_details">
                        <div className="profile_info_mail">
                            {user && <h2>{user.email + userUid}</h2>}
                        </div>
                        <div className="plan_details">
                            <h3>Plans{"(Current plan  : Premium)"}</h3>
                            <p>Renewal date: 04/03/2021</p>
                            <div className="plan_details_plans">
                                <div className="plan_details_plans_plan">
                                    <div className="plan_details_plans_plan_name">
                                        <h4>Netflix Basic</h4>
                                        <p>480p</p>
                                    </div>
                                    <button className=" subscribeButton">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="plan_details_plans_plan">
                                    <div className="plan_details_plans_plan_name">
                                        <h4>Netflix Standard</h4>
                                        <p>1080p</p>
                                    </div>
                                    <button className=" subscribeButton">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="plan_details_plans_plan">
                                    <div className="plan_details_plans_plan_name">
                                        <h4>Netflix Premium</h4>
                                        <p>4kHDR</p>
                                    </div>
                                    <button className=" subscribeButton">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className="signOutButton" onClick={SignOut}>
                            SignOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
