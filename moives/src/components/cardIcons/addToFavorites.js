import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {AuthContext} from "../../contexts/authContext";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToFavorites = async (e) => {
    if (isAuthenticated){
      e.preventDefault();
      await context.addToFavorites(movie);
    }else{
      navigate('/login');
    }
    
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

AddToFavoritesIcon.propTypes = {
  movie: PropTypes.object.isRequired, // Adjust the prop type according to your data structure
};
export default AddToFavoritesIcon;