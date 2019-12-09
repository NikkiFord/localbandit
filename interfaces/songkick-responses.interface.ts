  
export interface SongkickResponse {
  resultsPage: ResultsPage;
}

export interface ResultsPage {
  status: string;
  results: Results;
  perPage: number;
  page: number;
  totalEntries: number;
}

export interface Results {
  location?: Location[];
  event?: SongkickEvent[];
}

export interface SongkickEvent {
  id: number;
  displayName: string;
  type: string;
  uri: string;
  status: string;
  popularity: number;
  start: Start;
  performance: Performance[];
  ageRestriction?: string;
  flaggedAsEnded: boolean;
  venue: Venue;
  location: Location2;
  end?: End;
  series?: Country;
}

export interface End {
  date: string;
  datetime?: any;
  time?: any;
}

export interface Location2 {
  city: string;
  lat: number;
  lng: number;
}

export interface Venue {
  id: number;
  displayName: string;
  uri: string;
  metroArea: MetroArea2;
  lat?: number;
  lng?: number;
}

export interface MetroArea2 {
  displayName: string;
  country: Country;
  state: Country;
  id: number;
  uri: string;
}

export interface Performance {
  id: number;
  displayName: string;
  billing: string;
  billingIndex: number;
  artist: Artist;
}

export interface Artist {
  id: number;
  displayName: string;
  uri: string;
  identifier: (Identifier | Identifier)[];
}

export interface Identifier {
  mbid: string;
  href: string;
}

export interface Start {
  date: string;
  datetime?: string;
  time?: string;
}

export interface Location {
  city: City;
  metroArea: MetroArea;
}

export interface MetroArea {
  lat: number;
  lng: number;
  country: Country;
  uri: string;
  state: Country;
  displayName: string;
  id: number;
}

export interface City {
  lat: number;
  lng: number;
  country: Country;
  state: Country;
  displayName: string;
}

export interface Country {
  displayName: string;
}