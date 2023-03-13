import React from "react";
import "./Home.css";
import Nav from "./NavBar/Nav";
import Banner from "./Banner/Banner";

function HomePage() {
    return (
        <div className="home">
            <Nav />
            <Banner />
            {/* row */}
        </div>
    );
}

export default HomePage;
