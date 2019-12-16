import React, { useState } from "react";
import "./style.css";
import Nav from "./Nav";
import SearchResults from "./SearchResults";
import SearchFields from "./SearchFields";
import SavedEvents from "./SavedEvents";
import { SearchForm, HomePageProps } from "../../interfaces";
import { navigate } from "hookrouter";

const Home = ({ user }: HomePageProps) => {
  if (!user) {
    navigate("/");
  }

  const [searchData, setSearchData] = useState<SearchForm | null>(null);
  const [searchTabActive, setSearchTabActive] = useState(
    searchData ? true : false
  );

  const activeCSS = "text-black border-black";
  const inactiveCSS = "text-gray-600 border-transparent";

  const setHomePageSearchData = (searchData: SearchForm | null) => {
    setSearchTabActive(true);
    setSearchData(searchData);
  };

  return (
    <div className="wrapper">
      <Nav user={user} />
      <SearchFields setSearchData={setHomePageSearchData} />
      <nav className="pl-20 px-8 pt-2 shadow-md">
        <div className="-mb-px flex justify-left">
          {searchData && (
            <button
              className={`${
                searchTabActive ? activeCSS : inactiveCSS
              } no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8`}
              onClick={() => setSearchTabActive(true)}>
              Search Results
            </button>
          )}
          <button
            className={`${
              searchTabActive ? inactiveCSS : activeCSS
            } no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8`}
            onClick={() => setSearchTabActive(false)}>
            Saved Events
          </button>
        </div>
      </nav>
      <div className="flex flex-row mt-6 ml-20 mr-20">
        {/* <div className="w-full">{tab.component}</div> */}
        <div className="w-full">
          <SearchResults
            show={searchData && searchTabActive ? true : false}
            searchData={searchData || ({} as SearchForm)}
          />
          <SavedEvents show={!searchData || !searchTabActive} />
        </div>
      </div>
    </div>
  );
};

export default Home;
