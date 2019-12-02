import * as bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

passport.use(new FacebookStrategy({
    clientID: "755675724900811",
    clientSecret: "ed6336e8488034955ad76631074ea693",
    callbackURL: "http://localhost:5000/return"
    // callbackURL: ""
  },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  ));
  
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });

  // passport.use(
  //   new SpotifyStrategy(
  //     {
  //       clientID: "ab78c9bfe2104f2e9e01b86f908541a9",
  //       clientSecret: "5065d0f119f5424796fbc25fc5346c4c"
  //       callbackURL: 'http://localhost:8888/auth/spotify/callback'
  //     },
  //     function(accessToken, refreshToken, expires_in, profile, done) {
  //       User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
  //         return done(err, user);
  //       });
  //     }
  //   )
  // );

  const User = require("./userDatabase.ts");

  mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
  

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({ secret: "bitches!", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/login/facebook",
  passport.authenticate("facebook"));

app.get("/return",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/home");
  });

  app.get("/", (req, res)=>{
      res.sendFile(path.join(__dirname, "../build/index.html"));
  })

  // app.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
  //   // The request will be redirected to spotify for authentication, so this
  //   // function will not be called.
  // });
  
  // app.get(
  //   '/auth/spotify/callback',
  //   passport.authenticate('spotify', { failureRedirect: '/login' }),
  //   function(req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect('/');
  //   }
  // );

  app.post("/signup", function(req, res) {
    User.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));