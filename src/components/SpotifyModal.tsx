import React, { useState } from "react";
import { SpotifyModalProps, PlaylistResponse } from "../../interfaces";
import axios from "axios";

const SpotifyModal = (props: SpotifyModalProps) => {
  const { spotify } = props.user;
  const [playlistName, setPlaylistName] = useState(spotify.playlist ? spotify.playlist.name : "");
  const createPlaylist = async () => {
    const { data: playlistData } = await axios.request<PlaylistResponse>({
      url: "/api/create-playlist",
      method: "POST",
      params: {
        name: playlistName
      }
    });

    console.log(playlistData);
  };
  return (
    <div>
      <input type="text" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
      <button onClick={createPlaylist}>Create Playlist</button>
    </div>
  );
};

export default SpotifyModal;
