import React from "react";
import moment from "moment";
import { A } from "hookrouter";



const SavedEvent = ({ event }) => {
  return (
    <div className="w-1/8  m-6">
      <div className="border-4 border-gray-400 bg-white p-4 leading-normal h-full max-w-md">
      {/* <img
          alt="artist"
          className="artist-img border-black border-8 w-1/2 mt-2"
          style={{backgroundImage: "url(https://assets.sk-static.com/images/default_images/huge_avatar/default-event.png)", backgroundSize: "cover"}}
          src={`https://images.sk-static.com/images/media/profile_images/artists/${event.id}/huge_avatar`} /> */}
        <div className="">
        

          <div className="text-gray-900 font-bold text-xl mb-4 h-full">
            <A href={`/event-details/${event.id}`}>{event.displayName}</A>
          </div>
          <div className="text-gray-700 text-base">
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
