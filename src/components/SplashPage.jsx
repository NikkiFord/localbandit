import React from "react";
import "./style.css";

const Splash = () => {
  return (
    <div className='wrapper'>
      <div className='header pb-10'>
        <h1 className='pt-10 font-mono text-5xl'>
          Welcome to LocalBandIt. Bitches.
        </h1>
      </div>

      <div className='search'>
        <form class='w-full max-w-sm'>
          <div class='flex items-center border-b border-b-2 border-teal-500 py-2'>
            <input
              class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Staring date'
              aria-label='Starting date'></input>
            <input
              class='appearance-none bg-transparent border-none w-full text-gray-700 ml-10 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Ending date'
              aria-label='Starting date'></input>
            <button
              class='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
              type='button'>
              Go
            </button>
          </div>
        </form>
      </div>

      <ul className='flex border-b'>
        <li className='-mb-px mr-1'>
          <a
            className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold'
            href='/'>
            Saved searches
          </a>
        </li>
        <li className='mr-1'>
          <a
            className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
            href='/'>
            Current search
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Splash;
