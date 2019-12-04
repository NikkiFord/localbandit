import express from "express";
import eventbrite from "eventbrite";
import fs from "fs";
import path from "path";

const sdk = eventbrite({token: process.env.EVENTBRITE_TOKEN});

const api = express.Router();

api.get("/events", (req, res) => {
  fs.readFile(path.join(__dirname, 'eventbritesearch.json'), (err, data) => {
    if (err) return res.send(err.stack);
    res.json(JSON.parse(data.toString()));
  });
  /* API suffers from known issues. */
  // sdk.request("/events/search/").then(events => {
  //   res.json(events);
  // }).catch(err => {
  //   res.send(`${err.status}: ${err.statusText}`);
  // });
});

export default api;
