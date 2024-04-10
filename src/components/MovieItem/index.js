import { Link } from "react-router-dom";
import "./index.css";

const MovieItem = (props) => {
  const { itemDetails } = props;
  const { posterPath, title, voteAverage, id } = itemDetails;
  return (
    <Link to={`/movies/${id}`} className="link-item">
      <div className="movieItem-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={posterPath}
          className="MoveiImg"
        />
        <p className="title">{title}</p>
        <p className="voteAverage">vote_average: {voteAverage}</p>
      </div>
    </Link>
  );
};
export default MovieItem;
