import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "./authContext";
import {
    addFavouriteMovies,
    addMustWatchMovies,
    getFavouriteMovies,
    getMustWatchMovies,
    removeFavouriteMovies,
    removeMustWatchMovies,
    addMoviewReview,
    deleteMovieReview,
    getUserMovieReviews
} from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([]);
    const [myReviews, setMyReviews] = useState([]);
    const [mustWatch, setMustWatch] = useState([]);
    const {isAuthenticated, userName} = useContext(AuthContext);

    useEffect( () => {
        if (!isAuthenticated){
            setFavorites([]);
            setMyReviews([]);
            setMustWatch([]);
        } else {
            async function fetchData() {
                setFavorites(await getFavouriteMovies(userName));
                setMustWatch(await getMustWatchMovies(userName));
                setMyReviews(await getUserMovieReviews(userName));
            }
            fetchData();
        }
    }, [isAuthenticated, userName]);
    const addToFavorites = async (movie) => {
        let newFavorites = [];
        if (isAuthenticated) {
            newFavorites = await getFavouriteMovies(userName)
        }
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
            await addFavouriteMovies(userName, movie);
        } else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const removeFromFavorites = async (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
        await removeFavouriteMovies(userName, movie);
    };

    const addMustWatch = async (movie) => {
        let newMustWatch = [];
        if (isAuthenticated) {
            newMustWatch = await getMustWatchMovies(userName);
        }
        if (!mustWatch.includes(movie.id)) {
            newMustWatch = [...mustWatch, movie.id];
            await addMustWatchMovies(userName, movie)
        } else {
            newMustWatch = [...mustWatch];
        }
        setMustWatch(newMustWatch)
    };

    const removeFromMustWatch = async (movie) => {
        setMustWatch(mustWatch.filter(
            (mId) => mId !== movie.id
        ));
        await removeMustWatchMovies(userName, movie);
    };

    const addReview = async (review) => {
        let newReviews = [];
        console.log(review)
        if (isAuthenticated) {
            newReviews = await getUserMovieReviews(review.author);
        }
        if (!myReviews.includes(review)) {
            newReviews = [...myReviews, review];
            await addMoviewReview(review)
        } else {
            newReviews = [...myReviews];
        }
        setMyReviews(newReviews)
    };

    const removeReview = async (id) => {
        setMyReviews(myReviews.filter(
            (review) => review.id !== id
        ));
        await deleteMovieReview(id);
    }

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                mustWatch,
                myReviews,
                addToFavorites,
                addMustWatch,
                removeFromFavorites,
                removeFromMustWatch,
                addReview,
                removeReview
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;