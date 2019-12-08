import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults"
import SavedEvents from "./SavedEvents";
import {useRoutes, A} from "hookrouter";
import axios from "axios";

const routes = {
  "/search-results": () => <SearchResults />,
  "/saved-events": () => <SavedEvents />
};

interface IUser {
  id: string;
  displayName: string;
  provider: string;
}

const HomePage = () => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    axios.get<IUser>("/auth/user")
      .then(response => {
        setUser(response.data);
      });
  }, []);
  return (
    <div>
      { user && <h1 style={{color: "black", fontSize: "35px"}}>Welcome, {user.displayName}!</h1> }
      <A className="nav-link" href="/home/search-results">Show Search Results</A>
      <A className="nav-link" href="/home/saved-events">Show Saved Events</A>
      { useRoutes(routes) || <SearchResults /> }
    </div>
  );
};

export default HomePage;
