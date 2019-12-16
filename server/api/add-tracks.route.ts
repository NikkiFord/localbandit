import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const { trackURIs } = req.body;
    const spotifyApi = spotifyClient(req, res);
    const response = await spotifyApi.addTracksToPlaylist(
      req.user.spotify.playlist.id,
      trackURIs
    );
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
