import { useEffect } from "react";
import "./Home.css";
import Nav from "./NavBar/Nav";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "../../API/Requests";
import { useNavigate } from "react-router-dom";

function HomePage({ isUserLoggedIn }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isUserLoggedIn) {
            return navigate("/login");
        }
    }, [isUserLoggedIn, navigate]);

    return (
        <div className="home">
            <Nav />
            <Banner />
            <div className="banner--fadeBottom" />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default HomePage;
