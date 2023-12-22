import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const NowPlayingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('now_playing', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  //const addToFavorites = (movieId) => true 
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Now Playing Movies "
      movies={movies}
      action={(movie) => {
        return( 
          
          <> 
          <AddToMustWatchIcon  movie={movie}  />  
          <AddToFavoritesIcon movie={movie}/>
          </>
       
        
        )

      }}
    />
);

}

export default NowPlayingPage;