import SpotifyWebApi from "spotify-web-api-node";

export default (req, res) => {
  // if (!req.user.spotify) {
  //   return res.status(400).send("User does not have a Spotify account.");
  // }
  // const { accessToken } = req.user.spotify;

  // TODO: Comment this and uncomment the above when testing from React.
  const accessToken =
    "BQAnK-Lcbrz4N7jbVUltQN7-DY8Ge5EZHfUTE0EpLdbBP8kyiB-kNix0nKTR-AAOYy5CDh3YnRIfaROUE51s2xJoY9u2xmsLXNvbAqvdxVWZJKdZ5owZwYUscCQB7XwYly_ZhfFSt2Mzo08yIvkBhHBC_QDJB0hR_838Wool7WGotkm-Ci-6wYtJwKW_Aviz7TKITBnR_pJmbVjeGdGZYhpXG6rgES3K";
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);
  return spotifyApi;
};
