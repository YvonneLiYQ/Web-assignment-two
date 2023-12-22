export const getMovies = async (args) => {
  const [, pagePart] = args.queryKey;
  const {page} = pagePart;
  console.log(page);
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb?page=${page}`
  );
  return response.json();
};



export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const {id} = idPart;
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`
  );
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/genres`
  );
  return response.json();
};


export const getMovieImages = async ({queryKey}) => {
  const [, idPart] = queryKey;
  const {id} = idPart;
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/${id}/images`
  );
  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/${id}/reviews`
  )
  return response.json();
};

export const getUsersMovieReviews = async (movieId) => {
  const response = await fetch(
      `http://localhost:8080/api/reviews/${movieId}`
  )
  return response.json();
}

export const getUserMovieReviews = async (author) => {
  const response = await fetch(
      `http://localhost:8080/api/reviews/${author}/reviews`
  )
  return response.json();
}
export const addMoviewReview = async (review) => {
  const response = await fetch('http://localhost:8080/api/reviews/review', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
  });
  return response.json();
}

export const deleteMovieReview = async (id) => {
  const response = await fetch(`http://localhost:8080/api/reviews/review`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
  });
  return response.json();
}

export const getMovieUpComing = async () => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/upcoming`
  )
  return response.json();
}
export const getNowPlayingMovies = async () => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/nowPlaying`
  )
  return response.json();
}

export const getPopularMovies = async () => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/popularMovies`
  )
  return response.json();
}
export const getTopRatedMovies = async () => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/topRatedMovies`
  )
  return response.json();
}


export const getActors = async (args) => {
  const [, pagePart] = args.queryKey;
  const {page} = pagePart;
  const response = await fetch(
      `http://localhost:8080/api/actors/tmdb?page=${page}`
  )
  return response.json();
};

export const getCredit = async (id) => {
  //const [, idPart] = queryKey;
  //const {id} = idPart;
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/${id}/credits`
  )
  return response.json();
}
export const getFavouriteMovies = async (username) => {
  const response = await fetch(
      `http://localhost:8080/api/users/${username}/movies`
  )
  return response.json();
}
export const addFavouriteMovies = async (username, movie) => {
  const response = await fetch(`http://localhost:8080/api/users/movies`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: username,
          movieId: movie.id
      }),
  });
  return response.json();
}

export const removeFavouriteMovies = async (username, movie) => {
  const response = await fetch(`http://localhost:8080/api/users/movies`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, movieId: movie.id}),
  });
  return response.json();
}

export const getMustWatchMovies = async (username) => {
  const response = await fetch(
      `http://localhost:8080/api/users/${username}/mustWatch`
  )
  return response.json();
}

export const addMustWatchMovies = async (username, movie) => {
  const response = await fetch(`http://localhost:8080/api/users/mustWatch`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: username,
          movieId: movie.id
      }),
  });
  return response.json();
}

export const removeMustWatchMovies = async (username, movie) => {
  const response = await fetch(`http://localhost:8080/api/users/mustWatch`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, movieId: movie.id}),
  });
  return response.json();
}

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
}


export const getPopularActor= async (args) => {
  const [, idPart] = args.queryKey;
  const {id} = idPart;
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/${id}/popularActors`
  )
  return response.json();
};

