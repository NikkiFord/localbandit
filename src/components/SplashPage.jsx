import React from "react";
import "./style.css";
import Nav from "./Nav"
import NavBar from "./NavBar"

const Splash = () => {
  return (
    
    <div className='wrapper'>
      <Nav />
      {/* <div className='header pb-10'>
        <h1 className='pt-10 font-mono text-5xl'>
          Welcome to LocalBandIt. Bitches.
        </h1>
      </div> */}

      <div className='search flex items-end'>
        <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2 text-left'
            for='grid-city'>
            Start date
          </label>

          <input
            class='bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal'
            type='email'
            placeholder='Jan 1 2020'></input>
        </div>

        <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2 text-left'
            for='grid-city'>
            End date
          </label>

          <input
            class='bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal'
            type='email'
            placeholder='Jan 1 2020'></input>
        </div>

        <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label
            class='block uppercase tracking-wide text-white text-left text-xs font-bold mb-2'
            for='grid-state'>
            State
          </label>
          <div class='relative'>
            <select
              class='bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal'
              id='grid-state'>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                class='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>

        <button
          class='items-end h-12 self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2'
          type='button'>
          Go
        </button>

      </div>

      {/* <ul class='flex'>
        <li class='mr-6'>
          <a class='text-blue-500 hover:text-blue-800' href='/'>
            Active
          </a>
        </li>
        <li class='mr-6'>
          <a class='text-blue-500 hover:text-blue-800' href='/'>
            Link
          </a>
        </li>
      </ul>
      
    // </div> */}
    <NavBar/>
    </div>
    
  );
};

export default Splash;
