import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import moment from "moment";
import racoonLoader from "../loading-graphics/racoon.gif";
import { SongkickEvent, SearchResultsProps } from "../../interfaces";
import { A } from "hookrouter";

const SearchResults = (props: SearchResultsProps) => {
  const [eventList, setEventList] = useState<SongkickEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const { city, state } = props.searchData;

  useEffect(() => {
    if (!city || !state) return;
    setLoading(true);
    setEventList([]);
    axios
      .get<SongkickEvent[]>("/api/events", {
        params: {
          city,
          state
        }
      })
      .then((response) => {
        setLoading(false);
        setEventList(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  }, [city, state]);

  return (
    <div style={{ display: props.show ? "block" : "none" }}>
      {loading && (
        <img
          style={{ display: "block", margin: "auto" }}
          alt="Loading..."
          src={racoonLoader}
        />
      )}

      {eventList.length > 0 && (
        <>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Artists</th>
                <th className="px-4 py-2 text-left">Venue</th>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event, index) => (
                <tr
                  key={event.id}
                  className={index % 2 === 0 ? "" : "bg-gray-100"}>
                  <td className="border px-4 py-2">
                    {event.start.datetime
                      ? moment(event.start.datetime).format(
                          "MMM Do YYYY, h:mm a"
                        )
                      : moment(event.start.date).format("MMM Do YYYY")}
                  </td>
                  <td className="border px-4 py-2">
                    {event.performance
                      .map((performance) => performance.artist.displayName)
                      .join(", ")}
                  </td>
                  <td className="border px-4-py-2">
                    {event.venue.displayName}
                  </td>
                  <td className="border px-4 py-2" style={{textAlign: "center"}}>
                    <A style={{backgroundColor: "blue", color: "white"}} href={`/event-details/${event.id}`}>View Details</A>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="rounded-full mt-64 object-bottom font-semibold login-button h-12 self-center flex-shrink-0 bg-teal-400 hover:bg-teal-600 border-teal-400 hover:border-teal-600 text-sm border-4 text-white py-2 px-8"
            type="button">
            Create Combined Playlist
          </button>
        </>
      )}
    </div>
  );
};

export default SearchResults;
