import React, { useState, useEffect } from "react";
import { useRoutes } from "hookrouter";
import apiUtil from "./utils/api.util";

import "../src/components/style.css";
import HomePage from "./components/HomePage";
import SplashPage from "./components/SplashPage";
import EventDetails from "./components/EventDetails";
import NotFound from "./components/NotFound";
import SpotifyModal from "./components/SpotifyModal";
import ResultModal from "./components/ResultModal";

import "./App.css";

const routes = {
  "/": () => (user: any) => <SplashPage user={user} />,
  "/home*": () => (user: any) => <HomePage user={user} />,
  "/event-details/:eventId": ({ eventId }: any) => (user: any) => (
    <EventDetails user={user} eventId={eventId} />
  )
};

const App = () => {
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    (async () => {
      const user = await apiUtil.getUser().catch();
      if (user) setUser(user);
    })();
  }, []);

  return (
    <>
      <div>{useRoutes(routes)(user) || <NotFound />}</div>
      <SpotifyModal user={user} />
      <ResultModal />
    </>
  );
};

export default App;
