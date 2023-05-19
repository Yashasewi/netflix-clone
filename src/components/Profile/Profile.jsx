import Nav from "components/Home/NavBar/Nav";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector(selectUser);

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
                        <div className="profile_plans">
                            <h3>Plans</h3>
                            <p>Renewal date: 04/03/2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
