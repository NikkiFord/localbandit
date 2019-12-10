
import React from "react";
import { SearchForm } from ".";

export interface SearchFieldsProps {
  setSearchData: React.Dispatch<SearchForm>;
}

export interface ResultsTableProps {
  searchData: SearchForm;
}

export interface SplashPageProps {
  user: any;
}

export interface LoginPageProps {
  user: any;
}

export interface NavProps {
  user: any;
}
