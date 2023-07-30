// Movie.js
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./movie.css";
import Row from "../Home/Row/Row";
import Nav from "../Home/NavBar/Nav";

export default function Movie() {
    const { movie_id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movie_id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
                        },
                    }
                );
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movie_id]);

    if (loading) {
        return (
            <div className="loading-container">
                <h1>Loading movie details...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h1>Error: {error.message}</h1>
            </div>
        );
    }

    return (
        <div className="movie-details-container">
            <Nav />
            {movie ? (
                <div className="movie-content">
                    <div className="movie-details">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <h2 className="movie-title">{movie.title}</h2>
                            <p className="movie-overview">{movie.overview}</p>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Popularity: {movie.popularity}</p>
                            <p>Runtime: {movie.runtime} minutes</p>
                            <p>
                                Genres:{" "}
                                {movie.genres
                                    .map((genre) => genre.name)
                                    .join(", ")}
                            </p>
                            <p>
                                Spoken Languages:{" "}
                                {movie.spoken_languages
                                    .map((language) => language.name)
                                    .join(", ")}
                            </p>
                            <p>
                                Production Companies:{" "}
                                {movie.production_companies
                                    .map((company) => company.name)
                                    .join(", ")}
                            </p>
                            <p>
                                Production Countries:{" "}
                                {movie.production_countries
                                    .map((country) => country.name)
                                    .join(", ")}
                            </p>
                            <p>Vote Average: {movie.vote_average}</p>
                            <p>Vote Count: {movie.vote_count}</p>
                            {movie.homepage && (
                                <a
                                    href={movie.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="movie-homepage-link"
                                >
                                    Movie Homepage
                                </a>
                            )}
                        </div>
                    </div>
                    <Row
                        title="Similar Movies"
                        fetchUrl={`/movie/${movie_id}/similar`}
                    />
                </div>
            ) : (
                <div className="no-movie-container">
                    <h1>No movie details available</h1>
                </div>
            )}
        </div>
    );
}
