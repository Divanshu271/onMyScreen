const db = require("../database/models");
const feedback = require("../database/models/feedback");
module.exports = {

    // change name to createSubscriber
  postfeedback: async (req, res) => {
    // if else ?
    const { firstName, lastName, email, reviews } = req.query;
    try {
      const response = await db.feedback.create({
        firstName,
        lastName,
        email,
        reviews
      });

      return res.status(200).json({ response });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
