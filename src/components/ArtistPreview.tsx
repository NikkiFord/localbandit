import React from "react";
import apiUtil from "../utils/api.util";

const ArtistPreview = ({ artistName, artistId, tracks }) => {
  const addToSpotify = async () => {
    await apiUtil.addTracks(tracks.map(track => track.uri)).catch();
  };
  return (
    <div className="border-black border-8 m-10 flex-auto text-gray-700 text-center px-4 py-2 m-2">
      <div className="flex m-10">
        <div className="flex-row">
        <img
          alt="artist image"
          className="artist-img border-black border-8 w-1/2 mt-2"
          src={`https://images.sk-static.com/images/media/profile_images/artists/${artistId}/huge_avatar`} />
        </div>
        <div className=" justify-start ml-10">
          <h1 className="font-extrabold text-black text-xl text-left uppercase tracking-widest mt-2">{artistName}</h1>
          <ol className="list-inside text-left w-full list-decimal  mt-4 text-black text-xl font-medium">
            {tracks.length > 0 && tracks.map(track => (<li key={track.uri}>{track.name}</li>))}
          </ol>
          <button id="addTracks" className=" w-full mt-6 uppercase font-bold tracking-widest  flex-shrink-0 bg-teal-400 hover:bg-teal-600 border-teal-400 hover:border-teal-600 text-sm border-4 text-white py-1 px-6" onClick={addToSpotify}>Add to my Playlist</button>
       
        </div>
        </div>

    </div>
  )
};

export default ArtistPreview;
