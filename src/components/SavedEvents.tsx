import React from "react";
import { SavedEventsProps } from "../../interfaces";

const SavedEvents = (props: SavedEventsProps) => (
  <div style={{ display: props.show ? "block" : "none" }}>
    <h1 style={{ color: "#000", fontSize: "35px" }}>Saved Events</h1>
  </div>
);

export default SavedEvents;
