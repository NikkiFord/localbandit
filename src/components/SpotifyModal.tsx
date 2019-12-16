import React, { useState, useEffect } from "react";
import { SpotifyModalProps, ModalAPI } from "../../interfaces";
import Modal from "./Modal";
import modalUtil from "../utils/modal.util";
import apiUtil from "../utils/api.util";

const SpotifyModal = ({ user }: SpotifyModalProps) => {
  const defaultPlaylistName =
    user && user.spotify && user.spotify.playlist
      ? user.spotify.playlist.name
      : "";
  const [show, setShow] = useState(false);
  const [playlistName, setPlaylistName] = useState(defaultPlaylistName);
  const [modalApi] = useState<ModalAPI>({
    name: "create-playlist",
    open: () => setShow(true),
    cleanup: () => setShow(false)
  });

  useEffect(() => modalUtil._registerModal(modalApi), []);

  const handleSave = async () => {
    try {
      await apiUtil.createPlaylist(playlistName);
      modalApi.close();
    } catch (err) {
      modalApi.close(err);
    }
    setShow(false);
  };

  return (
    <Modal
      show={show}
      handleClose={() => modalApi.close()}
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

export default SpotifyModal;
