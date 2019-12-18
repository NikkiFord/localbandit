import dotenv from "dotenv";
dotenv.config();

import * as bodyParser from "body-parser";
import express from "express";
import expressSession from "express-session";
import apiRoutes from "./api";
import configureAuth from "./auth";
import path from "path";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "bitches!",
    resave: true,
    saveUninitialized: true
  })
);

const checkAuth = configureAuth(app);

app.use("/api", checkAuth, apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
