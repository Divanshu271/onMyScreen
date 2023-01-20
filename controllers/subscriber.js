const db = require("../database/models");
const subscriber = require("../database/models/subscriber");
module.exports = {

    // change name to createSubscriber
  postSubscriber: async (req, res) => {
    // if else ?
    const { firstName, lastName, email } = req.query;
    try {
      const subscriber = await db.subscriber.create({
        firstName,
        lastName,
        email,
      });

      return res.status(200).json({ subscriber });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
