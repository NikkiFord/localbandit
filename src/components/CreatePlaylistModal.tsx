import React, { useState } from "react";
import { SpotifyModalProps } from "../../interfaces";
import Modal from "./Modal";
import apiUtil from "../utils/api.util";

const CreatePlaylistModal = ({ user, modal, modals }: SpotifyModalProps) => {
  const defaultPlaylistName =
    user && user.spotify && user.spotify.playlist
      ? user.spotify.playlist.name
      : "";
  const [playlistName, setPlaylistName] = useState(defaultPlaylistName);

  const handleSave = async () => {
    try {
      apiUtil.modals = modals;
      apiUtil.user = user;
      await apiUtil.createPlaylist(playlistName);
      modal.close();
    } catch (err) {
      modal.error(err);
    }
  };

  return (
    <Modal
      show={modal.isActive}
      handleClose={() => modal.close()}
      handleSave={handleSave}>
      <label htmlFor="playlistName">Playlist Name:</label>
      <input
        name="playlistName"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
    </Modal>
  );
};

export default CreatePlaylistModal;
