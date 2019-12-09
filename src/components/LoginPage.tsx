import React from "react";
import "./login.css";
import { LoginPageProps } from "../../interfaces";
import { navigate } from "hookrouter";

const LoginPage = (props: LoginPageProps) => {
  const { user } = props;

  if (user) {
    navigate("/");
  }

  return (
    <div className="background">
      {/* <button onClick={() => window.location.href="/auth/facebook"}>Login with Facebook</button> */}
      <div className=" login-image">
        <div className="login-button flex justify-center self-end">
          <button onClick={() => window.location.href = "/auth/spotify"}
            className='login-button-element mt-64 object-bottom font-semibold login-button h-12 self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-8 '
            type='button'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
