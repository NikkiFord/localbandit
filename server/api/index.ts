import express from "express";
import axios from "axios";
import { SongkickResponse } from "../../interfaces";

const { SONGKICK_API_ROOT, SONGKICK_API_KEY } = process.env;

const apiRouter = express.Router();

apiRouter.get("/events", async (req, res) => {
  try {
    const { city, state } = req.query;

    const { data: locationData } = await axios.get<SongkickResponse>(
      `${SONGKICK_API_ROOT}/search/locations.json`,
      {
        params: {
          query: city || state,
          apikey: SONGKICK_API_KEY
        }
      }
    );

    if (!locationData.resultsPage.results.location) {
      throw new Error(`No location found for ${city}`)
    }

    const [location] = locationData.resultsPage.results.location
      .filter(location => location.city.state.displayName === state);

    if (!location) {
      throw new Error(`No location found for ${city}, ${state}`);
    }

    const eventResults = await axios.get<SongkickResponse>(
      `${SONGKICK_API_ROOT}/metro_areas/${location.metroArea.id}/calendar.json`,
      {
        params: {
          apikey: SONGKICK_API_KEY
        }
      }
    );

    if (!eventResults.data.resultsPage.results.event) {
      return res.json([]);
    }

    res.status(eventResults.status).json(eventResults.data.resultsPage.results.event);

  } catch (err) {
    res.send(err.toString());
  }
});

export default apiRouter;
