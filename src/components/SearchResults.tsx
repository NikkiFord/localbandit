import React, { useEffect, useState } from "react";
import axios from "axios";
import { SongkickEvent } from "../../interfaces";


const SearchResults = () => {
  const [eventList, setEventList] = useState<SongkickEvent[]>([]);

  useEffect(() => {
    axios.get<SongkickEvent[]>("/api/events", {
      params: {
        city: "Salt Lake City",
        state: "UT"
      }
    }).then((response) => {
      setEventList(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <h1 style={{ color: "black", fontSize: "35px" }}>Search Results</h1>
      {eventList.length === 0 ?
        <h1 style={{ color: "black", fontSize: "35px" }}>Loading...</h1> :
        <ol>
          {eventList.map((event) => (
            <li key={event.id}>
              {event.displayName}
            </li>
          ))}
        </ol>
      }
    </div>
  );
};

export default SearchResults;
