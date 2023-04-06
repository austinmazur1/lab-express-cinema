const express = require("express");
// const app = require("../app");
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
  .then(data => {

    // console.log("id", id);

    res.render("movie-info", { data }  )
  })
});

module.exports = router;
