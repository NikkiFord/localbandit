import React from "react";
import { SearchForm } from ".";
import { IModalController, IModalControllers } from "@chevtek/hookmodals/dist/interfaces";

export interface SearchFieldsProps {
  cachedSearch: SearchForm | null;
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
  user: any;
}

export interface SpotifyModalProps {
  user: any;
  modal: IModalController,
  modals: IModalControllers
}

export interface EventDetailsProps {
  user: any;
  eventId: number;
}

export interface ModalProps {
  handleClose: any;
  handleSave?: any;
  show: boolean;
  children: any;
}
