import React from "react";
import "./login.css";
import { SplashPageProps } from "../../interfaces";
import { navigate } from "hookrouter";

const Splash = (props: SplashPageProps) => {
  const { user } = props;

  if (user) {
    navigate("/home");
  }

  return (
    <div className="background">
      {/* <button onClick={() => window.location.href="/auth/facebook"}>Login with Facebook</button> */}
      <div className=" login-image">
        <div className="login-button flex justify-center self-end">
          <button
            onClick={() => (window.location.href = "/auth/spotify")}
            className="login-btn login-button-element rounded-full mt-64 object-bottom font-semibold login-button h-12 self-center flex-shrink-0 bg-teal-400 hover:bg-teal-600 border-teal-400 hover:border-teal-600 text-sm border-4 text-white py-2 px-8 "
            type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
