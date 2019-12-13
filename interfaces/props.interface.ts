import React from "react";
import { SearchForm } from ".";
import { SongkickEvent } from "./songkick-responses.interface";

export interface SearchFieldsProps {
  setSearchData: React.Dispatch<SearchForm | null>;
}

export interface SearchResultsProps {
  searchData: SearchForm;
  show: boolean;
}

export interface HomePageProps {
  user: any;
}

export interface SplashPageProps {
  user: any;
}

export interface NavProps {
  user: any;
}

export interface SavedEventsProps {
  show: boolean;
}

export interface SpotifyModalProps {
  user: any;
}

export interface EventDetailsProps {
  user: any;
  eventId: number;
}
