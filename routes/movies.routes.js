const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        console.log('the movies are:', allMoviesFromDB);
        // const  title = { title: allMoviesFromDB }
        // console.log(title);

        res.render('movies', {movies: allMoviesFromDB} );
    })
    .catch(err => {
        console.log(err);

        next(err)
    })
})

module.exports = router;