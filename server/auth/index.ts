import passport from "passport";
import passportFacebook from "passport-facebook";
import passportSpotify from "passport-spotify";

const {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  ROOT_DOMAIN
} = process.env;

export default (app) => {

  /* Configure Passport Strategies */
  passport.use(new passportFacebook.Strategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: `${ROOT_DOMAIN}/auth/facebook/callback`
  }, (_accessToken, _refreshToken, profile, cb) => {
    return cb(null, profile);
  }));

  passport.use(new passportSpotify.Strategy({
    clientID: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    callbackURL: `${ROOT_DOMAIN}/auth/spotify/callback`
  }, (_accessToken, _refreshToken, _expires_in, profile, cb) => {
    return cb(null, profile);
  }));

  /* User Serialization */
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((user, cb) => {
    cb(null, user);
  })

  /* Middlware Config */
  app.use(passport.initialize());
  app.use(passport.session());

  /* Authentication Endpoints */
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (_req, res) => res.redirect("/")
  );

  app.get("/auth/spotify", passport.authenticate("spotify"));
  app.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify", { failureRedirect: "/login" }),
    (_req, res) => res.redirect("/")
  );

  app.get("/auth/signout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  /* Fetch currently logged in user, or undefined if no authentication. */
  app.get("/auth/user", (req, res) => res.json(req.user));

};
