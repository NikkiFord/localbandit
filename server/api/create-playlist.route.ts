import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const { name } = req.body;
    const spotifyApi = spotifyClient(req, res);
    const playlistName = `LocalBand.it: ${name}`;
    const playlistResponse = await spotifyApi.createPlaylist(
      req.user.spotify.id,
      playlistName,
      { public: false }
    );
    const playlistId = playlistResponse.body.id;
    req.user.spotify.playlist = {
      id: playlistId,
      name: playlistName
    };
    req.user.save();
    res.status(200).json(req.user.spotify.playlist);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
