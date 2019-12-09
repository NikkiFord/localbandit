import React from "react";
import "./style.css";
import { NavProps } from "../../interfaces";
import { navigate } from "hookrouter";

const Nav = (props: NavProps) => {
  const { user } = props;

  const signIn = () => {
    navigate("/login");
  };

  const signOut = () => {
    window.location.href = "auth/signout";
  };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='logo.svg'>
        </svg>
        <span className='font-semibold text-xl tracking-tight'>{ user ? `Welcome, ${user.displayName}` : "Local Bandit" }</span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>

          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>

          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>

          </a>
        </div>
        <div>
          <button onClick={user ? signOut : signIn} className='inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0' >
            {user ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
