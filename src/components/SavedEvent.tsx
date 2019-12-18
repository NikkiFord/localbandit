import React from "react";
import moment from "moment";
import { A } from "hookrouter";



const SavedEvent = ({ event }) => {
  return (
    <div className="flex-wrap w-1/2 mr-10 h-10">
      <div
        // className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        // style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}
        // title="Woman holding a mug"
        
        >
           
          
        </div>
      <div className="flex-wrap border-4 border-gray-400 bg-white p-4 leading-normal">
      {/* <img
          alt="artist"
          className="artist-img border-black border-8 w-1/2 mt-2"
          style={{backgroundImage: "url(https://assets.sk-static.com/images/default_images/huge_avatar/default-event.png)", backgroundSize: "cover"}}
          src={`https://images.sk-static.com/images/media/profile_images/artists/${event.id}/huge_avatar`} /> */}
        <div className="">
        

          <div className="text-gray-900 font-bold text-xl mb-2">
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
