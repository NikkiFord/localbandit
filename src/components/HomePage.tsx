import React from "react";
import SearchResults from "./SearchResults";
import SavedEvents from "./SavedEvents";
import {useRoutes, A} from "hookrouter";

const routes = {
  "/search-results": () => <SearchResults />,
  "/saved-events": () => <SavedEvents />
};

const HomePage = () => (
  <div>
    <h1>HOME PAGE</h1>
    <A className="nav-link" href="/home/search-results">Show Search Results</A>
    <A className="nav-link" href="/home/saved-events">Show Saved Events</A>
    { useRoutes(routes) || <SearchResults /> }
  </div>
);

export default HomePage;
