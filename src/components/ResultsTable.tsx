import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import moment from "moment";
import racoonLoader from "../loading-graphics/racoon.gif";
import { SongkickEvent, ResultsTableProps } from "../../interfaces";

const Results = (props: ResultsTableProps) => {
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
          city: city,
          state: state
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
    <>
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
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-8"
            type="button">
            Create Combined Playlist
          </button>
        </>
      )}
    </>
  );
};

export default Results;
