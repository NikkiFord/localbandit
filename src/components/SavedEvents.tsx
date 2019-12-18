import React from "react";
import { SavedEventsProps } from "../../interfaces";
import SavedEvent from "./SavedEvent";
import emptyState from "./city.svg"

const SavedEvents = ({ show, user }: SavedEventsProps) => {
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="flex justify-center w-100 mt-8">
        <div className="flex-column ">
       {/* <img
          alt="logo"
          className="fill-current h-400 w-400 mr-6"
          width="400"
          height="400"
          src={emptyState}></img> */}
      <h1 className="mt-2 text-2xl font-thin text-gray-300">Save bands that you don't want to miss</h1>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-around">
        {user && user.savedEvents && user.savedEvents.map(event => (
          <SavedEvent key={event.id} event={event} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default SavedEvents;
