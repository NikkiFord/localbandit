import React, { useEffect, useState } from "react";
import axios from "axios";

interface IEventResponse {
  pagination: IPagination;
  events: Array<IEvent>;
  location: ILocation;
}

interface IPagination {
  object_count: number;
  page_number: number;
  page_size: number;
  page_count: number;
  has_more_items: boolean
}

interface ILocation {
  latitude: string;
  augmented_location: {
    city: string;
    region: string;
    country: string;
  };
  within: string;
  longitude: string;
  address: string
}

interface IEvent {
  name: INameOrDescription;
  description: INameOrDescription;
  id: string;
  url: string;
  start: IStartOrEnd;
  end: IStartOrEnd;
  organization_id: string;
  created: string;
  changed: string;
  published: string;
  capacity?: null;
  capacity_is_custom?: null;
  status: string;
  currency: string;
  listed: boolean;
  shareable: boolean;
  online_event: boolean;
  tx_time_limit: number;
  hide_start_date: boolean;
  hide_end_date: boolean;
  locale: string;
  is_locked: boolean;
  privacy_setting: string;
  is_series: boolean;
  is_series_parent: boolean;
  inventory_type: string;
  is_reserved_seating: boolean;
  show_pick_a_seat: boolean;
  show_seatmap_thumbnail: boolean;
  show_colors_in_seatmap_thumbnail: boolean;
  source: string;
  is_free: boolean;
  version: string;
  summary: string;
  logo_id: string;
  organizer_id: string;
  venue_id: string;
  category_id: string;
  subcategory_id: string;
  format_id: string;
  resource_uri: string;
  is_externally_ticketed: boolean;
  series_id: string;
  logo: ILogo;
}
interface INameOrDescription {
  text: string;
  html: string;
}
interface IStartOrEnd {
  timezone: string;
  local: string;
  utc: string;
}
interface ILogo {
  crop_mask?: null;
  original: {
    url: string;
    width?: null;
    height?: null;
  }
  id: string;
  url: string;
  aspect_ratio: string;
  edge_color: string;
  edge_color_set: boolean;
}

const SearchResults = () => {
  const [eventList, setEventList] = useState<Array<IEvent>>([]);

  useEffect(() => {
    axios.get<IEventResponse>("/api/events", {
      data: {
        "location.address": "Salt Lake City, Utah"
      }
    }).then((response) => {
      setEventList(response.data.events);
    })
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <ol>
        {eventList.map((event) => (
          <li key={event.id}>
            {event.name.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
