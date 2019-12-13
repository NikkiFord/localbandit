import React, { useState } from "react";
import "./style.css";
import Nav from "./Nav";
import NavBar from "./NavBar";
import Results from "./ResultsTable";
import SearchFields from "./SearchFields";
import { SearchForm, SplashPageProps } from "../../interfaces";

const Splash = (props: SplashPageProps) => {
  const [searchData, setSearchData] = useState({} as SearchForm);
  return (
    <div className="wrapper">
      <Nav user={props.user} />
      {/* <div className='header pb-10'>
        <h1 className='pt-10 font-mono text-5xl'>
          Welcome to LocalBandIt. Bitches.
        </h1>
      </div> */}

      <SearchFields setSearchData={setSearchData} />

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
      <NavBar />
      <div className="flex flex-row mt-6 ml-20 mr-20">
        <div className="w-full">
          {searchData ? (
            <Results searchData={searchData} />
          ) : (
            <h1>No Results</h1>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Splash;
