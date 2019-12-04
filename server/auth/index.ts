import passport from "passport";
import passportFacebook from "passport-facebook";
// import passportSpotify from "passport-spotify";

export default (app) => {

  passport.use(new passportFacebook.Strategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${process.env.ROOT_DOMAIN}/auth/facebook/callback`
  }, (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }));

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  })

  app.use(passport.initialize());
  app.use(passport.session());

  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (req, res) => res.redirect("/home")
  );

  app.get("/auth/user", (req, res) => res.json(req.user));

};
