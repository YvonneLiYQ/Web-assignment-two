import React, { useState } from "react";
//import PageTemplate from "../components/templateActorListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPopularActor } from "../api/tmdb-api";
import FilterActorsCard from "../components/filterActorsCard";
import Grid from "@mui/material/Grid";
import Actor from "../components/actorCard";

const ActorsHomePage = (props) => {
  const [nameFilter, setNameFilter] = useState("");
  const [sortinFilter, setsortinFilter]=useState(false);
  const { data, error, isLoading, isError } = useQuery(
    "actors",
    getPopularActor
  );



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data.results;

  
  let displayedActors = actors
  .filter((m) => {
    return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  })

  console.log("actors",actors);


  // Redundant, but necessary to avoid app crashing.
  //   const liked = actors.filter(m => m.liked)
  //   localStorage.setItem('liked', JSON.stringify(liked))
  //   const addToLiked = (movieId) => true
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "ASC") {
      setsortinFilter(false);
    } else if (type === "DESC") {
      setsortinFilter(true);
    }

    // else setGenreFilter(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <FilterActorsCard
        onUserInput={handleChange}
        titleFilter={nameFilter}
        sortinFilter={sortinFilter}
      ></FilterActorsCard>
      <div
        style={{ flex: 1, display: "flex", flexWrap: "wrap", paddingLeft: 50 }}
      >
        {displayedActors.map((a) => (
          <div style={{ width: "300px" }}>
            <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Actor key={a.id} actor={a} />
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsHomePage;
