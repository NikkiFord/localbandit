import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const spotifyId = "7xwvfic7sivlur9xpt1i907r9";
    const { artistName, tracks } = req.body;
    const spotifyApi = spotifyClient(req, res);

    const playlistResponse = await spotifyApi.createPlaylist(
      spotifyId,
      `LocalBand.it ${artistName}`,
      { public: false }
    );

    const playlistId = playlistResponse.body.id;

    const addTracksResponse = await spotifyApi.addTracksToPlaylist(
      playlistId,
      tracks
    );

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
