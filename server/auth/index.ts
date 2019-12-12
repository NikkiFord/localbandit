import passport from "passport";
import passportFacebook from "passport-facebook";
import passportSpotify from "passport-spotify";
import db from "../db";

const {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  ROOT_DOMAIN
} = process.env;

export default app => {
  /* Configure Passport Strategies */
  passport.use(
    new passportFacebook.Strategy(
      {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: `${ROOT_DOMAIN}/auth/facebook/callback`
      },
      (_accessToken, _refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );

  passport.use(
    new passportSpotify.Strategy(
      {
        clientID: SPOTIFY_CLIENT_ID,
        clientSecret: SPOTIFY_CLIENT_SECRET,
        callbackURL: `${ROOT_DOMAIN}/auth/spotify/callback`
      },
      (accessToken, _refreshToken, _expires_in, profile, done) => {
        db.User.findOne({ "spotify.id": profile.id }).exec((err, user) => {
          if (err) return done(err);
          if (!user) {
            user = new db.User({
              name: profile.displayName,
              spotify: {
                id: profile.id,
                accessToken
              }
            });
          } else {
            user.spotify.accessToken = accessToken;
          }
          user.save(done);
        });
      }
    )
  );

  /* User Serialization */
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((userId, done) => {
    db.User.findById(userId).exec((err, user) => {
      if (err) return done(err);
      done(null, user);
    });
  });

  /* Middleware Config */
  app.use(passport.initialize());
  app.use(passport.session());

  /* Authentication Endpoints */
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (_req, res) => res.redirect("/")
  );

  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", { scope: ["playlist-modify-private"] })
  );
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

  return (req, res, next) => {
    // if (!req.user) {
    //   return res.status(401).send();
    // }
    next();
  };
};
