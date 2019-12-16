import React from "react";
import apiUtil from "../utils/api.util";

const ArtistPreview = ({ artistName, artistId, tracks }) => {
  const addToSpotify = async () => {
    await apiUtil.addTracks(tracks.map(track => track.uri)).catch();
  };
  return (
    <div>
      <h1 className="text-black">{artistName}</h1>
      <img
        alt="artist image"
        className="artist-img"
        src={`https://images.sk-static.com/images/media/profile_images/artists/${artistId}/huge_avatar`} />
      <ol>
        {tracks.length > 0 && tracks.map(track => (<li key={track.uri}>{track.name}</li>))}
      </ol>
      <button id="addTracks" onClick={addToSpotify}>Add to my Playlist</button>
    </div>
  )
};

export default ArtistPreview;
