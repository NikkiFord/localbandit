import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const { artistName } = req.query;

    const spotifyApi = spotifyClient(req, res);

    const artistsResponse = await spotifyApi.searchArtists(artistName, {
      limit: 1
    });
    const [artist] = artistsResponse.body.artists.items;

    const topTracksResponse = await spotifyApi.getArtistTopTracks(
      artist.id,
      "US"
    );

    res.status(200).send(
      topTracksResponse.body.tracks.map(track => ({
        name: track.name,
        uri: track.uri
      }))
    );
  } catch (err) {
    res.status(500).send(err);
  }
};
