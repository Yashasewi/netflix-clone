import { useState, useEffect } from "react";
import netflix from "./netflix.png";
import "./nav.css";
import { Link } from "react-router-dom";

const Profile_icon = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png",
    "https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
    "https://th.bing.com/th/id/OIP.7mFdnXMXuTw4_rIWW0LkLAHaHa?pid=ImgDet&rs=1",
    "https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg",
    "https://i.pinimg.com/474x/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a--stupid-stuff-stay-calm.jpg",
];

function Nav() {
    const [transparent, setTransparent] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setTransparent(true);
        } else {
            setTransparent(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => window.removeEventListener("scroll", changeBackground);
    }, []);


    return (
        <div className={`nav ${transparent ? "nav_black" : "nav_transparent"}`}>
            <div className="nav_content">
                <Link to={"/"}>
                    <img
                        className="nav_logo"
                        src={netflix}
                        alt="Netflix Logo"
                    />
                </Link>

                <Link to={"/profile"}>
                    {" "}
                    <img
                        className="nav_avatar"
                        src={Profile_icon[Math.floor(Math.random() * 9)]}
                        alt="Profile Icon"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
