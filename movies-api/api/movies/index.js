import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getActors, getMovieUpComing} from '../tmdb-api';
import {getGenres} from '../tmdb-api';
import {getMovies} from '../tmdb-api';
import { getMovie } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getPopularMovies } from '../tmdb-api';
import { getTopRatedMovies } from '../tmdb-api';
//import { getActors } from '../tmdb-api';
import { getCredit } from '../tmdb-api';
  
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/tmdb', asyncHandler(async (req, res) => {
    const page = req.query.page;
    const movies = await getMovies(page);
    if(movies){
        res.status(200).json(movies);
    }else{
    res.status(404).json({massage:"the movie  you requested could not be found.",status_code:404});
    }
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: "The movie you requested could not be found.", status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getMovieUpComing();
    res.status(200).json(upcomingMovies);
}));
router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genresMovies = await getGenres();
    res.status(200).json(genresMovies);
}));
router.get('/tmdb/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const moviesImages = await getMovieImages(id);
    res.status(200).json(moviesImages);
}));
router.get('/tmdb/movies/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const moviesReviews = await getMovieReviews(id);
    res.status(200).json(moviesReviews);
}));
router.get('/tmdb/nowPlaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));
router.get('/tmdb/popularMovies', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));
router.get('/tmdb/topRatedMovies', asyncHandler(async (req, res) => {
    const topRatedMovies  = await getTopRatedMovies ();
    res.status(200).json(topRatedMovies);
}));
router.get('/tmdb/:id/credits', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movieCredits = await getCredit (id);
    res.status(200).json( movieCredits );
}));
router.get('/tmdb/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const reviews = await getMovieReviews (id);
    res.status(200).json( reviews );
}));
router.get('/popularActors', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const popularActors = await getPopularActor (id);
    if(popularActors){
        res.status(200).json(actors);
    }else{
    res.status(404).json({massage:"the movie  you requested could not be found.",status_code:404});
    }
}));


export default router;