const router = require("express").Router();
const Topic = require("../models/topics.js");

router.post("/api/topic", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Topic.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    console.log(err.response);
    // if not, we can at least catch the error
    res.json(err);
  });
});