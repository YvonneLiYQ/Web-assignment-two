import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { getCredit } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: credits,
    error,
    isLoading,
    isError,
  } = useQuery(["credits", { id: movie.id }], getCredit);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  console.log(credits);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" clickable />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} clickable />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`${movie.runtime} min.`}
          clickable
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          clickable
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
          clickable
        />
        <Chip label={`Released: ${movie.release_date}`} clickable />
        <Chip label={`Popularity: ${movie.popularity}`} clickable />
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip
            label="Production_countries"
            sx={{ ...chip }}
            color="primary"
            clickable
          />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} clickable />
          </li>
        ))}
      </Paper>

      <div
        component="ul"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        sx={{ ...root }}
      >
        <div style={{marginTop:20}}>
          <Link to={`/movie/`}>
            <div>
              <Button variant="outlined" size="medium" color="primary">
                Return HomePage
              </Button>
            </div>
          </Link>
        </div>
        <div style={{ paddingTop: 20, margin: "auto" }}>
          <Button
            variant="outlined"
            onClick={(e) => {
              navigate("/movies/actor", { replace: true });
              e.stopPropagation();
            }}
            size="medium"
            color="primary"
          >
            Actor
          </Button>
        </div>
      </div>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
