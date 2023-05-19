import Nav from "components/Home/NavBar/Nav";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
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
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="profile_details">
                        <h2>tt</h2>
                        {user && <h2>{user.email}</h2>}
                    </div>
                    <button className="signOut" onClick={SignOut}>
                        SignOut
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
