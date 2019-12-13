import React, { useState, useEffect } from "react";
import { useRoutes } from "hookrouter";
import axios from "axios";

import "../src/components/style.css";
import HomePage from "./components/HomePage";
import SplashPage from "./components/SplashPage";
import EventDetails from "./components/EventDetails";
import NotFound from "./components/NotFound";
import SpotifyModal from "./components/SpotifyModal";

import "./App.css";

const routes = {
  "/": () => (user: any) => <SplashPage user={user} />,
  "/home*": () => (user: any) => <HomePage user={user} />,
  "/event-details/:eventId": ({ eventId }: any) => (user: any) => <EventDetails user={user} eventId={eventId} />,
  "/spotify-test": () => (user: any) => <SpotifyModal user={user} />
};

const App = () => {
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    axios
      .get("/auth/user")
      .then((response) => {
        setUser(response.data || null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{useRoutes(routes)(user) || <NotFound />}</div>;
};

export default App;
