import React, { useState, useEffect } from "react";
import Header from "../Header";
import MovieItem from "../MovieItem";
import "./index.css";

const SearchedMoviePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=fa030b3d520335437ba6c4cbb262cfcb&language=en-US&query=${searchQuery}&page=1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      console.log(data);
      const { results } = data;
      console.log(results);
      const updatedData = results.map((eachMovie) => ({
        id: eachMovie.id,
        title: eachMovie.title,
        posterPath: eachMovie.poster_path,
        voteAverage: eachMovie.vote_average,
      }));
      setSearchResults(updatedData);
      console.log(updatedData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="searched-movie-container">
      <Header />
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="searchInput"
        />
      </div>
      <div className="movies-list">
        {searchResults.map((eachMovie) => (
          <MovieItem key={eachMovie.id} itemDetails={eachMovie} />
        ))}
      </div>
    </div>
  );
};

export default SearchedMoviePage;
