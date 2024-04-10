import { Component } from "react";
import "./index.css";
import Header from "../Header";
import MovieItem from "../MovieItem";

class HomePage extends Component {
  state = {
    moviesList: [],
  };

  componentDidMount() {
    this.getMoviesDetails();
  }

  getMoviesDetails = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=fa030b3d520335437ba6c4cbb262cfcb&language=en-US&page=1";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);

    if (response.ok === true) {
      const data = await response.json();
      const updatedData = data.results.map((eachItem) => ({
        id: eachItem.id,
        posterPath: eachItem.poster_path,
        title: eachItem.title,
        voteAverage: eachItem.vote_average,
      }));
      this.setState({ moviesList: updatedData });
    }
  };

  render() {
    const { moviesList } = this.state;
    return (
      <div className="Home-container">
        <Header />
        <ul type="none" className="movies-list">
          {moviesList.map((eachItem) => (
            <MovieItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    );
  }
}
export default HomePage;
