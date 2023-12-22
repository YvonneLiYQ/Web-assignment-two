import React from "react";  // useState/useEffect redundant 
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import GridList from "@mui/material/GridList";
import GridListTile from "@mui/material/GridListTile";


const TemplateActorPage = ({ actor, children }) => {
  const classes = {};
  const {  data,error, isLoading, isError } = useQuery(
    ["images", { id: actor.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles 

  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <GridList cellHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <GridListTile key={image.file_path} className={classes.gridListTile} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </GridListTile>
              ))}
            </GridList>

          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;