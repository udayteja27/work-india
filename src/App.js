import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import TopRatedPage from "./components/TopRatedPage";
import UpcomingPage from "./components/UpcomingPage";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/movies/:id" element={<MovieDetails />} />
      <Route exact path="/top-rated" element={<TopRatedPage />} />
      <Route exact path="/upcoming" element={<UpcomingPage />} />
      <Route exact path="/search-results" element={<SearchResults />} />
    </Routes>
  </BrowserRouter>
);

export default App;
