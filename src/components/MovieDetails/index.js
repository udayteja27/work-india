import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import "./index.css";

const MovieDetails = () => {
  const [movieDetailList, setMovieDetailList] = useState([]);
  const [castDetailsList, setCastDetailsList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMoviesDetails();
    getCastDetails();
  }, []);

  const getMoviesDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=fa030b3d520335437ba6c4cbb262cfcb&language=en-US`;
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const updatedData = {
        id: data.id,
        title: data.title,
        overview: data.overview,
        posterPath: data.poster_path,
        releaseDate: data.release_date,
        genres: data.genres,
        runtime: data.runtime,
        voteAverage: data.vote_average,
        backdropPath: data.backdrop_path,
      };
      setMovieDetailList(updatedData);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const getCastDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fa030b3d520335437ba6c4cbb262cfcb&language=en-US`;
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      const updatedCastData = data.cast.map((eachDetails) => ({
        id: eachDetails.id,
        profilePath: eachDetails.profile_path,
        name: eachDetails.name,
        character: eachDetails.character,
      }));
      setCastDetailsList(updatedCastData);
      console.log(updatedCastData);
    } catch (error) {
      console.log("Error fetching cast details:", error);
    }
  };

  return (
    <div className="movie-container">
      <Header />
      <div className="details-container">
        <div className="movies-details-list-container">
          <div className="img-title-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetailList.posterPath}`}
              alt={movieDetailList.posterPath}
              className="posterImg"
            />
            <div className="title-container">
              <h1 className="title">{movieDetailList.title}</h1>
              <p className="rating">
                vote_average: {movieDetailList.voteAverage}
              </p>
              <p className="duration">
                duration: {movieDetailList.runtime} min
              </p>
              <p className="releaseDate">
                Release Date: {movieDetailList.releaseDate}
              </p>
            </div>
          </div>
          <div className="overview-container">
            <h1 className="heading">Overview</h1>
            <p className="overview">{movieDetailList.overview}</p>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetailList.backdropPath}`}
          alt={movieDetailList.backdropPath}
          className="backdrop_path"
        />
      </div>
      <h1 className="heading">Cast</h1>
      <div className="cast-container">
        {castDetailsList.map((castMember) => (
          <div key={castMember.id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w500${castMember.profilePath}`}
              alt={castMember.name}
              className="profilePath"
            />
            <p className="name">{castMember.name}</p>
            <p className="character">{castMember.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
