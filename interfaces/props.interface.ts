
import React from "react";
import { SearchForm } from ".";

export interface SearchFieldsProps {
  setSearchData: React.Dispatch<SearchForm>;
}

export interface ResultsTableProps {
  searchData: SearchForm;
}