import dotenv from "dotenv";
dotenv.config();

import * as bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from "./api";
import configureAuth from "./auth";
import path from "path";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({ secret: "bitches!", resave: true, saveUninitialized: true }));

configureAuth(app);

// const User = require("./userDatabase.ts");

// mongoose.connect('mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use("/api", apiRoutes);

app.post("/signup", function (req, res) {
  // User.create(req.body)
  //   .then(function (dbUser) {
  //     res.json(dbUser);
  //   })
  //   .catch(function (err) {
  //     res.json(err);
  //   });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
