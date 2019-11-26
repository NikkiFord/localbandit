import * as bodyParser from 'body-parser';
import express from 'express';

const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
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

app.listen(port, () => console.log(`Listening on port ${port}`));