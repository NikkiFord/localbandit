import React from "react";
import { SavedEventsProps } from "../../interfaces";
import SavedEvent from "./SavedEvent";

const SavedEvents = ({ show, user }: SavedEventsProps) => {
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <h1 style={{ color: "#000", fontSize: "35px" }}>Saved Events</h1>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-around">
        {user && user.savedEvents && user.savedEvents.map(event => (
          <SavedEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default SavedEvents;
