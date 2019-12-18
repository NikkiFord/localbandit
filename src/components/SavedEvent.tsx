import React from "react";
import moment from "moment";
import { A } from "hookrouter";



const SavedEvent = ({ event }) => {
  return (
    <div className="w-1/8  m-6">
      <div className="border-4 border-black  p-4 leading-normal h-full max-w-md">
      
        <div className="">
        

          <div className="text-black font-bold text-xl pb-6 m-6 mb-4 h-full border-b-4 border-teal-300">
            <A href={`/event-details/${event.id}`}>{event.displayName}</A>
          </div>
          <div className=" m-6 text-black text-base leading-loose">
            <p>Location: {event.location.city}</p>
            <p>Venue: {event.venue.displayName}</p>
            <p>Starts: {moment(event.start.datetime || event.start.date).format("ddd MMM DD, YYYY")}</p>
            {event.end && <p>Ends: {moment(event.end.datetime || event.end.date).format("ddd MMM DD, YYYY")}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedEvent;
