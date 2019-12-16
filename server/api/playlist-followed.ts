import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    if (!req.user.spotify || !req.user.spotify.playlist) {
      return res.status(200).json(false);
    }
    const { id: playlistId } = req.user.spotify.playlist;
    const { id: spotifyId } = req.user.spotify;

    if (!playlistId || !spotifyId) return res.status(200).json(false);

    const spotifyApi = spotifyClient(req, res);

    const response = await spotifyApi.areFollowingPlaylist(spotifyId, playlistId, [spotifyId]);

    if (response.body.length === 0 || !response.body[0]) {
      return res.status(200).json(false);
    }

    res.status(200).json(true);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
