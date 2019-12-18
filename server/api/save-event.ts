export default async (req, res) => {
  try {
    const { event } = req.body;
    const { user } = req;
    if (!user.savedEvents) {
      user.savedEvents = [];
    } else {
      if (user.savedEvents.filter(e => e.id === event.id).length > 0) {
        throw new Error("Event ID already exists in user saved events.");
      };
    }
    user.savedEvents.push(event);
    user.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
