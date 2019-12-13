import spotifyClient from "../utils/spotify-client";

export default async (req, res) => {
  try {
    const artistNames = req.query.artistNames.split(",").slice(0, 5);

    const spotifyApi = spotifyClient(req, res);

    const promises = artistNames.map(async (artistName) => {
      const artistsResponse = await spotifyApi.searchArtists(artistName, {
        limit: 1
      });
      const [artist] = artistsResponse.body.artists.items;

      const topTracksResponse = await spotifyApi.getArtistTopTracks(
        artist.id,
        "US"
      );

      return {
        artistName,
        topTracks: topTracksResponse.body.tracks.map((track) => ({
          name: track.name,
          uri: track.uri
        }))
      };
    });

    const results = await Promise.all(promises);

    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
