import express from "express";
import eventsRoute from "./events.route";
import eventRoute from "./event.route";
import topTracksRoute from "./top-tracks.route";
import createPlaylistRoute from "./create-playlist.route";

const apiRouter = express.Router();
apiRouter.get("/events", eventsRoute);
apiRouter.get("/event", eventRoute);
apiRouter.get("/top-tracks", topTracksRoute);
apiRouter.post("/create-playlist", createPlaylistRoute);

export default apiRouter;
