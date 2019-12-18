import axios from "axios";
import { navigate } from "hookrouter";
import { SongkickEvent } from "../../interfaces";

export default {

  user: null,
  modals: null,

  async createPlaylist(name) {
    try {
      await axios.post("/api/create-playlist", { name });

      await this.modals.result.open({
        success: true,
        title: "Playlist Created",
        body: `Successfully created playlist "localband.it: ${name} on your Spotify account!`
      });
    } catch (err) {
      this.handleError(err);
    }
  },

  async playlistFollowed() {
    try {
      const response = await axios.get("/api/playlist-followed");
      return response.data;
    } catch (err) {
      return false;
    }
  },

  async topTracks(artistNames) {
    try {
      const response = await axios.get("/api/top-tracks", {
        params: { artistNames }
      });

      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  },

  async addTracks(trackURIs) {
    try {
      const playlistFollowed = await this.playlistFollowed();

      if (!playlistFollowed) {
        await this.modals.createPlaylist.open({ user: this.user });
      }

      await axios.post("/api/add-tracks", { trackURIs });

      await this.modals.result.open({
        success: true,
        title: "Tracks Added",
        body: `Successfully added ${trackURIs.length} tracks to your Spotify playlist!`
      });
    } catch (err) {
      this.handleError(err);
    }
  },

  async event(eventId) {
    try {
      const response = await axios.get("/api/event", { params: { eventId } });

      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  },

  async events(city, state, startDate, endDate) {
    try {
      const response = await axios.get("/api/events", {
        params: {
          city,
          state,
          startDate,
          endDate
        }
      });

      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  },

  async saveEvent(event: SongkickEvent) {
    try {
      await axios.post("/api/save-event", { event });

      await this.modals.result.open({
        success: true,
        title: "Event Saved",
        body: `Successfully saved ${event.displayName} so you can come back to it later!`
      });
    } catch (err) {
      this.handleError(err);
    }
  },

  async getUser() {
    try {
      const response = await axios.get("/auth/user");

      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  },

  async handleError(err) {
    if (err.response.status === 401) {
      return navigate("/auth/spotify");
    }
    await this.modals.result.open({
      success: false,
      title: `${err.response ? err.response.status : "Unknown"} Error!`,
      body: err.response ? err.response.data : err.toString()
    });
    throw err;
  }

};
