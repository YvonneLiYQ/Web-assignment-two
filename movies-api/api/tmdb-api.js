import fetch from 'node-fetch';

export const getMovieUpComing = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        return await response.json();
    } catch (error) {
        throw error;
    }
};

/*export const getMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};*/
/*export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};*/
export const getMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );
        console.log(response);
        return await response.json();
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

export const getMovie = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieImages = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieReviews = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
        ).then((res) => res.json())
            .then((json) => {
                // console.log(json.results);
                return json.results;
            });
        return await response;
    } catch (error) {
        throw error;
    }
};

export const getNowPlayingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
}
/*export const getPopularMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&include_video=false&language=en-US&page=1`
        );
        return await response;
    } catch (error) {
        throw error;
    }
}*/
export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
/*export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
}*/

export const getTopRatedMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  


export const getActors = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        )
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getCredit = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
}

/*export const login = async (user) => {
  let res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  let { request_token } = await res.json();
  res = await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      ...user,
      request_token
    })
  });
  res = await res.json();
  if (res.success) {
    res = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`, {
      method: "post",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        request_token: res.request_token
      })
    })
    return await res.json()
  }
  return false;
}*/


/*export const getPopularActor = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};*/
/*export const getPopularActor = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        );
        return await response.json();
    } catch (error) {
        throw error
    }
};*/
export const getPopularActor = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        ).then((res) => res.json())
            .then((json) => {
                // console.log(json.results);
                return json.results;
            });
        return await response;
    } catch (error) {
        throw error;
    }
};
