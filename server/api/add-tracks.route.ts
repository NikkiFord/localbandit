import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const { trackURIs } = req.body;
    const spotifyApi = spotifyClient(req, res);
    await spotifyApi.addTracksToPlaylist(
      req.user.spotify.playlist.id,
      trackURIs
    );
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
