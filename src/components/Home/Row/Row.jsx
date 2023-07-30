import "./row.css";
import { useEffect, useState } from "react";
import axios from "../../../API/axios.js";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    // if (title === "Similar Movies") {
    //     useEffect(() => {
    //         async function fetchData() {
    //             const request = await axios.get(fetchUrl);
    //             setMovies(request.data.results);
    //             return request;
    //         }
    //         fetchData();
    //     }, [fetchUrl]);
    // }

    useEffect(() => {
        async function fetchData() {
            if (title === "Similar Movies") {
                const request = await axios.get(
                    `https://api.themoviedb.org/3/${fetchUrl}`,

                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
                        },
                    }
                );
                setMovies(request.data.results.slice(0, 20));
                console.log(request.data.results.slice(0, 20));
                return request;
            } else {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
        }
        fetchData();
    }, [fetchUrl, title]);
    // console.log(movies[0]);

    return (
        <div className="row">
            <h2 className="movie_title_row">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                        movie.backdrop_path !== null && (
                            <div
                                key={movie.id}
                                className="movie_poster_container"
                            >
                                <a href={`/movie/${movie.id}`}>
                                    <img
                                        key={movie.id}
                                        className={`row__poster ${
                                            isLargeRow && "row__posterLarge"
                                        }`}
                                        alt={movie.name || movie.original_title}
                                        src={`${BASE_URL}${
                                            isLargeRow
                                                ? movie.poster_path
                                                : movie.backdrop_path
                                        }`}
                                        title={
                                            movie.name || movie.original_title
                                        } // Use the 'title' attribute for the tooltip
                                    />
                                    <span className="movie_tooltip">
                                        {movie.name || movie.original_title}
                                    </span>
                                </a>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
