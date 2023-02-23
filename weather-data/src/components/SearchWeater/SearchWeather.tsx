import React, { useState } from "react";
import "./SearchWeather.css";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../features/weatherSlice";
import SearchResults from "./SearchResults";

const SearchWeather = () => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Set up state for search input and result display
  const [searchCity, setSearchCity] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  // Handle search button click
  const handleSearch = () => {
    // Update search query in Redux store and local storage
    dispatch(setSearchQuery(searchCity));
    localStorage.setItem("searchCity", searchCity);
    // Show search result
    setShowResults(true);
    setSearchCity("");
  };

  return (
    <div className="weather-container">
      <div className="search-container">
        {/* Search input */}
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        {/* Search button */}
        <button onClick={handleSearch}>Search</button>
        <div className="results-container">
          {/* Display search results */}
          {showResults && <SearchResults />}
        </div>
      </div>
    </div>
  );
};
export default SearchWeather;
