import axios from "axios";
import modalUtil from "./modal.util";

export default {
  async createPlaylist(name) {
    try {
      await axios.post("/api/create-playlist", { name });

      await modalUtil.open("result", {
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
        await modalUtil.open("create-playlist");
      }

      await axios.post("/api/add-tracks", { trackURIs });

      await modalUtil.open("result", {
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

  async getUser() {
    try {
      const response = await axios.get("/auth/user");

      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  },

  async handleError(err) {
    debugger;
    await modalUtil.open("result", {
      success: false,
      title: `${err.status} Error!`,
      body: `
        An error has occurred.
        <br />
        <br />
        ${err.toString()}
      `
    });
    throw err;
  }
};
