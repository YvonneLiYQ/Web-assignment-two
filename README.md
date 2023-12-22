# Web-assignment-two

Name: yangqing Li

## Features.

 + Mores new API routes, including  parameterised URL
 + Object referencing in Mongo.
 + Basic Authentication and protected routes
 + Additional validation using Mongoose or regular expressions
 + Good use of express middleware (e.g. error handling).
 + Substantial React App integration.
 + API documentation 
 + Improved error logging

## Setup requirements.

cd .\movies-api\
npm install
npm run dev

cd .\movies\
npm install
npm run start


## API Configuration

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
TMDB_KEY=YourReactMovieKey
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

+ GET api/movies/tmdb/popular - Get 20 popular movies.
+ GET api/movies/tmdb/movies/:id - get the details of the movies.
+ GET api/movies/tmdb/movies/:id/images - get the images of the movies.
+ GET api/movies/tmdb/nowplaying - get the nowplaying movies.
+ GET api/movies/tmdb/toprated - get the toprated movies.
+ GET api/movies/tmdb/upcomimg - get the upcoming movies.
+ GET api/users/:userName/favorites - get the movie's id in favorites of one user
+ POST api/users/userName/favorites - add a movie id to the favorites of one user
+ GET api/users/:userName/mustWatch - get the movie's id in mustWatch of one user
+ POST api/users/userName/mustWatch - add a movie id to the mustWatch of one user
+ GET api/genres - get genres of the movies



## Security and Authentication
I use the passport authentication to project . let the homepage, upcoming page, toprated page, people page ,mustWatch page and favorite page to be authentication verify that it is a valid validation. After that you can get these pages.
## Integrating with React App

+ GET api/movies/tmdb/popular - the homepage movielist
+ GET api/movies/tmdb/movies/:id - the movie details in moviedetail page
+ GET api/movies/tmdb/movies/:id/images - get the posters of the movies in moviedetail page.
+ GET api/movies/tmdb/nowplaying - the nowplaying movielist.
+ GET api/movies/tmdb/toprated - the toprated movielist.
+ GET api/users/:userName/favorites - get the movie's id in favorites of one user
+ POST api/users/userName/favorites - add a movie id to the favorites of one user
+ GET api/movies/tmdb/movies/:id/reviews - get the movie's reviews of one movie
+ POST api/reviews/review - add a movie review to the reviews of one user
+ GET api/genres - get the genres of the movies


User login and registration function: the user can register, after the registration is completed, the registration information will be saved to the database, the user can log in, and the user can see the popular, upcoming, toprated and other pages after logging in.When you are not logged in, all clicks on the protected interface will be the login interface.
User's favorite movie: The user can select their favorite movie and when they log in again, they will see their favorite movie.
The user must watch the movie: the user can select the movie they want to watch when they log in again, they will see the movie they want to watch.
User reviews: Users can review their favorite movies and see other users' reviews. The reviews will be stored in the mongodb review dataset. This store contains username, review content, and rating.


