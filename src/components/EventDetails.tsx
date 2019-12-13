import React, { useState, useEffect } from "react";
import "./login.css";
import { EventDetailsProps, SongkickEvent } from "../../interfaces";
import racoonLoader from "../loading-graphics/racoon.gif";
import axios from "axios";

const EventDetails = (props: EventDetailsProps) => {
  const { eventId, user } = props;
  const [event, setEvent] = useState({} as SongkickEvent);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<SongkickEvent>("/api/event", {
        params: {
          eventId
        }
      })
      .then((response) => {
        setLoading(false);
        setEvent(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      })
  }, [eventId])

  return (
    <div className="wrapper">
      {loading && (
        <img
          style={{ display: "block", margin: "auto" }}
          alt="Loading..."
          src={racoonLoader}
        />
      )}
      <h1 className="text-black text-3xl">Event Details</h1>

      {event.performance && event.performance.map(performance => {
        return <img
          className="artist-img"
          src={`https://images.sk-static.com/images/media/profile_images/artists/${performance.artist.id}/huge_avatar`} />
      })}
    </div>
  );
};

export default EventDetails;
