
import React, { useState, useEffect } from "react";
import {useRoutes, A} from "hookrouter";
import axios from "axios";

import "../src/components/style.css"
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";
import EventDetails from "./components/EventDetails";

import "./App.css";

const routes = {
  "/": () => (user: any) => <SplashPage user={user} />,
  "/login": () => (user: any) => <LoginPage user={user} />,
};

const App = () => {
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    axios.get("/auth/user")
      .then(response => {
        setUser(response.data || null);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <nav>
        {/* Temporary Nav Buttons */}
        <A className="nav-link" href="/">Splash Page</A>
        <A className="nav-link" href="/login">Login Page</A>

      </nav>

      <div>
        {/* Page Components */}
        { useRoutes(routes)(user) || <NotFound /> }
      </div>
      {/* <EventDetails /> */}
    </div>
  );
};

export default App;
