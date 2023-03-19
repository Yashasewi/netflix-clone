import "./row.css";
import { useEffect, useState } from "react";
import axios from "../../../API/axios.js";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(movies);
    return (
        <div className="row">
            <h2 className="movie_title_row">{title}</h2>
            <div className="row_posters">

            {movies.map((movie) => {
                return (
                    <img
                        key={movie.id}
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        src={`${BASE_URL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                );
            })}
            </div>
        </div>
    );
}

export default Row;
