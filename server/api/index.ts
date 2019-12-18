import express from "express";
import eventsRoute from "./events.route";
import eventRoute from "./event.route";
import topTracksRoute from "./top-tracks.route";
import createPlaylistRoute from "./create-playlist.route";
import addTracksRoute from "./add-tracks.route";
import playlistFollowedRoute from "./playlist-followed";
import saveEventRoute from "./save-event";

const apiRouter = express.Router();
apiRouter.get("/events", eventsRoute);
apiRouter.get("/event", eventRoute);
apiRouter.get("/top-tracks", topTracksRoute);
apiRouter.get("/playlist-followed", playlistFollowedRoute);
apiRouter.post("/create-playlist", createPlaylistRoute);
apiRouter.post("/add-tracks", addTracksRoute);
apiRouter.post("/save-event", saveEventRoute);

export default apiRouter;
