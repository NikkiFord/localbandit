import React, { useState, useEffect } from "react";
import "./style.css";
import "./login.css";
import { EventDetailsProps, SongkickEvent } from "../../interfaces";
import racoonLoader from "../loading-graphics/racoon.gif";
import ArtistPreview from "./ArtistPreview";
import { A, navigate } from "hookrouter";
import apiUtil from "../utils/api.util";
import { useModals } from "@chevtek/hookmodals"



const EventDetails = ({ eventId, user }: EventDetailsProps) => {
  if (!user) {
    navigate("/");
  }

  const [event, setEvent] = useState({} as SongkickEvent);
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventSaved, setEventSaved] = useState(false);
  const modals = useModals();

  useEffect(() => {
    if (!user || !user.savedEvents) {
      return;
    }
    user.savedEvents.forEach(e => {
      if (e.id === eventId) {
        setEventSaved(true);
      }
    });
  }, [eventId, user]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        apiUtil.modals = modals;

        const eventData = await apiUtil.event(eventId);

        setEvent(eventData);

        const artistNames = eventData.performance
          .map(performance => performance.artist.displayName)
          .join(",");

        const topTracksData = await apiUtil.topTracks(artistNames);

        setTopTracks(topTracksData);

        setLoading(false);

      } catch (err) {
        setLoading(false);
      }
    })();
  }, [eventId, modals]);

  const saveEvent = async () => {
    await apiUtil.saveEvent(event);
    setEventSaved(true);
    if (!user.savedEvents) {
      user.savedEvents = [];
    }
    user.savedEvents.push(event);
  };

  return (
    <div className="wrapper">
      {loading && (
        <img
          className="details-loader"
          style={{ display: "block", margin: "auto" }}
          alt="Loading..."
          src={racoonLoader}
        />
      )}
      {event && !loading &&
        <div className="">
          <nav className="flex items-center justify-between flex-wrap bg-black p-6 back-bar">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <A href="/home">

                {/* <img
                  className="fill-current h-10 w-10 mr-6 mb-6"
                  width="50"
                  height="50"
                  src={back}></img>
                  </A>
                <h1 className="font-semibold text-xl tracking-tight">
                  Back</h1> */}
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>Back</span>
                </button>
                </A>
            </div>
          </nav>


            {/* can we carry over the event name and some venue details? */}
            <div className="test flex w-full ">
            <div className="w-1/3 bg-gray-100 p-20 mb-10">
            <h1 className="text-black mb-10 font-extrabold text-xl text-left uppercase tracking-widest mt-4">Who, what, where, when</h1>
            {/* <textarea style={{height: "100px", width: "100%"}} value={JSON.stringify(event, null, 2)} readOnly></textarea> */}
              
                <h1 className="text-black text-4xl font-extrabold mb-2">{event.displayName}</h1>
                {/* <h1 className="text-black text-4xl">{event.location.city}</h1> */}
               
                {/* <h1 className="text-black text-4xl">{event.location.displayName}</h1> */}
                {/* <h1 className="text-black text-4xl">{event.venue.displayName}</h1> */}
                {/* <h1 className="text-black text-4xl">{event.start.date}</h1> */}

                {/* <h1 className="text-black text-4xl">{event.status}</h1> */}
                {/* <h1 className="text-black text-4xl">{event.start.date}</h1> */}
            <button disabled={eventSaved} className={` w-full mt-10 uppercase font-bold tracking-widest flex-shrink-0 bg-teal-400 border-teal-400 text-sm border-4 text-white py-1 px-6 ${eventSaved ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-600 hover:border-teal-600"}`} onClick={saveEvent}>{ eventSaved ? "Event Saved" : "Save Event" }</button>
            </div>
            {event.performance && event.performance.map(performance => {

              const [artistData] = topTracks
                .filter(artistTopTrack =>
                  artistTopTrack.artistName === performance.artist.displayName);

              return <ArtistPreview
                key={performance.artist.id}
                artistName={performance.artist.displayName}
                artistId={performance.artist.id}
                tracks={artistData.topTracks} />

            })}

            </div>
        </div>
          }
    </div>
  );
    };

export default EventDetails;
