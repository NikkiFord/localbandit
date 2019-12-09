
import React from "react";
import {useRoutes, A} from "hookrouter";

import "../src/components/style.css"
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";

import "./App.css";

const routes = {
  "/": () => <SplashPage />,
  "/login": () => <LoginPage />,
};

const App = () => (
  <div>
    <nav>
      {/* Temporary Nav Buttons */}
      <A className="nav-link" href="/">Splash Page</A>
      <A className="nav-link" href="/login">Login Page</A>
      
    </nav>

    <div>
      {/* Page Components */}
      { useRoutes(routes) || <NotFound /> }
    </div>
  </div>
);

export default App;