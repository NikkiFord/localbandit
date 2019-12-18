import React from "react";
import "./style.css";
import { NavProps } from "../../interfaces";
import logo from "./logo.svg"

const Nav = (props: NavProps) => {
  const { user } = props;

  const signOut = () => {
    window.location.href = "auth/signout";
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          alt="logo"
          className="fill-current h-10 w-10 mr-6"
          width="100"
          height="100"
          src={logo}></img>
        <span className="font-semibold text-xl tracking-tight">
          {user ? `Welcome, ${user.name}` : "Local Bandit"}
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"></a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"></a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"></a> */}
        </div>
        <div>
          <button
            onClick={signOut}
            className="uppercase font-bold tracking-widest inline-block text-sm px-6 py-2 leading-none border-white border-4 text-white  hover:border-transparent hover:text-black hover:bg-white mt-6 lg:mt-0">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
