import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {AuthContext} from "../../contexts/authContext";
import {useNavigate} from "react-router-dom";

const AddToLikesIcon = ({ person }) => {
  const context = useContext(MoviesContext);
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToLikes = async (e) => {
    if (isAuthenticated){
      e.preventDefault();
     context.addToLikes(person);
    }else{
      navigate('/login');
    }
    
  };
  return (
    <IconButton aria-label="add to likes" onClick={handleAddToLikes}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToLikesIcon;