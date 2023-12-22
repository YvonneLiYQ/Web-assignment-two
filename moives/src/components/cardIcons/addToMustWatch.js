import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToMustWatch =async (e) => {
    if (isAuthenticated){
      e.preventDefault();
    await context.addMustWatch(movie);
    }else{
      navigate('/login');
    }
    
  };

  return (
    <IconButton aria-label="add to MustWatch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};
AddToMustWatchIcon.propTypes = {
  movie: PropTypes.object.isRequired, // Adjust the prop type according to your data structure
};
export default AddToMustWatchIcon;