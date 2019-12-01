import React from "react";
import {useRoutes, A} from "hookrouter";

import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import EventDetails from "./components/EventDetails";
import NotFound from "./components/NotFound";

import "./App.css";

const routes = {
  "/": () => <SplashPage />,
  "/login": () => <LoginPage />,
  "/home*": () => <HomePage />,
  "/event/:id": ({id}:any) => <EventDetails eventId={id} />
};

const App = () => (
  <div>
    <nav>
      {/* Temporary Nav Buttons */}
      <A className="nav-link" href="/">Splash Page</A>
      <A className="nav-link" href="/login">Login Page</A>
      <A className="nav-link" href="/home/saved-events">Home Page</A>
      <A className="nav-link" href="/event/12345">Event Details Page</A>
    </nav>

    <div>
      {/* Page Components */}
      { useRoutes(routes) || <NotFound /> }
    </div>
  </div>
);

export default App;