import React, { useState } from "react";
import "./style.css";
import { SearchFieldsProps, SearchForm } from "../../interfaces";
import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

const SearchFields = (props: SearchFieldsProps) => {
  const [searchForm, setSearchForm] = useState({ city: "", state: "NM" } as SearchForm);

  const updateCity = (event: any) => {
    setSearchForm({
      ...searchForm,
      city: event.target.value
    });
  };

  const updateState = (event: any) => {
    setSearchForm({
      ...searchForm,
      state: event.target.value
    });
  };

  const searchClick = () => {
    props.setSearchData({ ...searchForm });
  }

  // const spotTest = () =>{
  //     const accessCode = "BQDymkTelk_pu50vMPzR96E4b7DndhMoWPZLTXfaAIzbJU52qvEB4n56nK5ezgX-36DxEJbRMGoMby-KdeysrSnTzGfdloDfJTr0Wo0xqtXeg1Rdklz9bHdHxiSSIyfHgU3QvkiDrBIn"

  //     axios({
  //       method: 'GET',
  //       url: `https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer' + accessCode
  //       }
  //     }).then( res => {
  //       console.log(res.data.tracks.items[0])
  //     }

  //     ).catch();
  // };

  

  return (
    <div className="search flex items-end m-20">
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city"
        >
          Start date
        </label>

        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          placeholder="Jan 1 2020"
        ></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city"
        >
          End date
        </label>

        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          placeholder="Jan 1 2020"
        ></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city"
        >
          City
        </label>

        <input
          value={searchForm.city}
          onChange={updateCity}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Salt Lake City"
        ></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2"
          htmlFor="grid-state"
        >
          State
        </label>
        <div className="relative">
          <select
            value={searchForm.state}
            onChange={updateState}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
            id="grid-state"
          >
            <option>UT</option>
            <option>NM</option>
            <option>TX</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        onClick={searchClick}
        className="mt-6 items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"
        type="button"
      >
        Go
      </button>

      <button
        // onClick={spotTest}
        className="mt-6 ml-4 items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"
        type="button"
      >
        Spotify
      </button>
    </div>
  );
};

export default SearchFields;