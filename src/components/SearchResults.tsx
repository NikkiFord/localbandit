import React, { useState, useEffect } from "react";
import "./style.css";
import moment from "moment";
import racoonLoader from "../loading-graphics/racoon.gif";
import { SongkickEvent, SearchResultsProps } from "../../interfaces";
import { A } from "hookrouter";
import apiUtil from "../utils/api.util";

const SearchResults = ({ searchData, show}: SearchResultsProps) => {
  const [eventList, setEventList] = useState<SongkickEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const { city, state, startDate, endDate } = searchData;

  useEffect(() => {
    (async () => {
      try {
        if (!city || !state || !startDate || !endDate) return;
        setLoading(true);
        setEventList([]);
        const eventsData = await apiUtil.events(city, state, startDate, endDate);
        setLoading(false);
        setEventList(eventsData);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [city, state, startDate, endDate]);

  return (
    <div style={{ display: show ? "block" : "none" }}>
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
                  <td className="border px-4 py-2">
                    {event.venue.displayName}
                  </td>
                  <td className="border px-4 py-2" style={{textAlign: "center"}}>
{/*                  
                  <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button> */}
                    <A className=" hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 inline-flex items-center" href={`/event-details/${event.id}`}>View Details</A>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </>
      )}
    </div>
  );
};

export default SearchResults;
