import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <>
    <nav className="header-container">
      <Link className="link-item" to="/movies">
        <div className="icon-container">
          <h1 className="heading">MovieDb</h1>
        </div>
      </Link>
      <div className="topRated-search-container">
        <Link className="link" to="/movies">
          <p className="page-name">Popular</p>
        </Link>
        <Link className="link" to="/top-rated">
          <p className="page-name">Top Rated</p>
        </Link>
        <Link className="link" to="/upcoming">
          <p className="page-name">Upcoming</p>
        </Link>
        <Link to="/search-results">
          <button type="button" className="searchBtn">
            Search for a movie..
          </button>
        </Link>
      </div>
    </nav>
  </>
);
export default Header;
