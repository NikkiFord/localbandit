import React, { useState } from "react";
import "./style.css";
import UsStatesList from "./UsStatesList";
import { SearchFieldsProps, SearchForm } from "../../interfaces";
import moment from "moment";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

const SearchFields = (props: SearchFieldsProps) => {
  const [searchForm, setSearchForm] = useState({
    city: "",
    state: "",
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().add(7, "days").format("YYYY-MM-DD")
  } as SearchForm);

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

  const updateStartDate = (event: any) => {
    setSearchForm({
      ...searchForm,
      startDate: event.target.value
    });
  };

  const updateEndDate = (event: any) => {
    setSearchForm({
      ...searchForm,
      endDate: event.target.value
    });
  };

  const searchClick = () => {
    props.setSearchData({ ...searchForm });
  };
  return (
    <div className="search flex items-end m-20 ">
      <div className="w-full md:w-1/4 px-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city">
          Start date
        </label>

        <input
          value={searchForm.startDate}
          onChange={updateStartDate}
          className="bg-white rounded focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="date"
          placeholder="Jan 1 2020"></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mr-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city">
          End date
        </label>

        <input
          value={searchForm.endDate}
          onChange={updateEndDate}
          className="bg-white rounded focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="date"
          placeholder="Jan 1 2020"></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
          htmlFor="grid-city">
          City
        </label>

        <input
          value={searchForm.city}
          onChange={updateCity}
          className="bg-white rounded focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
          type="city"
          placeholder="Enter city name"></input>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2"
          htmlFor="grid-state">
          State
        </label>
        <div className="relative">
          <select
            value={searchForm.state}
            onChange={updateState}
            className="states-dropdown bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
            id="grid-state">
              <option disabled value="">State</option>
            {UsStatesList.map((state) => {
              return <option key={state}>{state}</option>;
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        onClick={searchClick}
        className=" blue-btn mt-6 mr-0 uppercase object-bottom font-bold tracking-widest self-center flex-shrink-0 bg-teal-400 hover:bg-teal-600 border-teal-400 hover:border-teal-600 text-sm border-4 text-white py-1 px-6"
        type="button">
        search
      </button>

      {/* <button
        onClick={() => navigate("/spotify-test")}
        className="mt-6 ml-4 items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"
        type="button"
      >
        Spotify
      </button> */}
    </div>
  );
};

export default SearchFields;
