import axios from "axios";
import { SongkickResponse } from "../../interfaces";
const { SONGKICK_API_ROOT, SONGKICK_API_KEY } = process.env;

export default async (req, res) => {
  try {
    const { eventId } = req.query;

    const eventResult = await axios.get<SongkickResponse>(
      `${SONGKICK_API_ROOT}/events/${eventId}.json`,
      {
        params: {
          apikey: SONGKICK_API_KEY
        }
      }
    );

    res
      .status(eventResult.status)
      .json(eventResult.data.resultsPage.results.event);

  } catch (err) {
    res.status(500).send(err.toString());
  }
};
