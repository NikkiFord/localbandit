import SpotifyWebApi from "spotify-web-api-node";

export default (req, res) => {
  if (!req.user.spotify) {
    return res.status(400).send("User does not have a Spotify account.");
  }
  const { accessToken } = req.user.spotify;
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);
  return spotifyApi;
};
