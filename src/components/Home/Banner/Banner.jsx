import "./banner.css";
import { useState, useEffect } from "react";
import axios from "../../../API/axios.js";
import requests from "../../../API/Requests.js";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }

        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_content">
                <h1 className="movie_title">
                    {movie?.name || movie?.original_name}
                </h1>
                {/* <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR4nO2aXQ6CMBCE5xiAJzL1OP4cAK+Fl8ELiD7g05qa5YXEtJCWFpkv6duSzGQ23cACEELmcgDQAHgBkMTnqVrMVBPXDMTLj1NPScI+0AM4AiiRnhLASTWJbzI3LbYmcuOs2mybOXlqcYH8KFRb51M89GKuiK8+Gll7IgbAPcC1mtxIG2g+JDcSatDRSKxEYiNLtVZshEYcMJGZCFtrq60lgQfgGBpxwURmIry1tnprxUZoxAETmYmwtRzwnR2ZfXxo/+Uryj6QmeRGlkZoZK2JdFqYw8ptzE61PeBBo8V2Z5cblymrN6PFve7sKqSnUhNv1ea9pq4DTuxk6+kBoxEOy9FV/jBACMGXD3pWLmoTvvuaAAAAAElFTkSuQmCC"></img> */}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h2 className="movie_description">
                    {truncate(movie?.overview, 200)}
                </h2>
            </div>
        </header>
    );
}

export default Banner;
