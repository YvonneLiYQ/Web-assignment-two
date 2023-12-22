import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
const RemoveFromMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRemoveFromMustWatch =async  (e) => {
    if(isAuthenticated){
       e.preventDefault();
    context.removeFromMustWatch(movie);
    }else{
      navigate('/login');
    }
   
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMustWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};
RemoveFromMustWatchIcon.propTypes = {
  movie: PropTypes.object.isRequired, // Adjust the prop type according to your data structure
};
export default RemoveFromMustWatchIcon;