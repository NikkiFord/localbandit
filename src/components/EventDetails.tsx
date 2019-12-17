import React, { useState, useEffect } from "react";
import "./style.css";
import "./login.css";
import { EventDetailsProps, SongkickEvent } from "../../interfaces";
import racoonLoader from "../loading-graphics/racoon.gif";
import ArtistPreview from "./ArtistPreview";
import { A, navigate } from "hookrouter";
import apiUtil from "../utils/api.util";
import back from "./back-btn.svg"
import left from "./left-arrow.svg"

const EventDetails = ({ eventId, user }: EventDetailsProps) => {
  if (!user) {
    navigate("/");
  }

  const [event, setEvent] = useState({} as SongkickEvent);
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

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
            <div className="w-1/3 bg-gray-100 p-20">
            <h1 className="text-black text-4xl">Event Details</h1>
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