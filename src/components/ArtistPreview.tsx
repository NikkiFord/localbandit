import React from "react";
import apiUtil from "../utils/api.util";

const ArtistPreview = ({ artistName, artistId, tracks }) => {
  const addToSpotify = async () => {
    await apiUtil.addTracks(tracks.map(track => track.uri)).catch();
  };
  return (
    <div className="test-2 flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
      <div className="flex">
        <div className="flex-row">
        <img
          alt="artist image"
          className="artist-img border-black border-8 w-1/2"
          src={`https://images.sk-static.com/images/media/profile_images/artists/${artistId}/huge_avatar`} />
        </div>
        <div className="flex-row">
          <h1 className="text-black text-4xl text-left">{artistName}</h1>
          <ol className="text-left w-1/2">
            {tracks.length > 0 && tracks.map(track => (<li key={track.uri}>{track.name}</li>))}
          </ol>
        </div>
        <button id="addTracks" onClick={addToSpotify}>Add to my Playlist</button>
      </div>
    </div>
  )
};

export default ArtistPreview;
