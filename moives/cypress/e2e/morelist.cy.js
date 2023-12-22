let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
  });
  
    
       describe("From the More button", () => {
        it("should Select every page in the list", () =>{
        //   cy.get("button[aria-label='add to favorites']").eq(0).click();
        //   cy.get("button[aria-label='add to favorites']").eq(1).click();
        //   cy.get(".MuiCardHeader-avatar");
                cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
                
                cy.get("h3").contains("Favorite Movies");
        
          cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();
          
                cy.get("h3").contains("UpComing Movies");
          cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();
          
                cy.get("h3").contains("MustWatch Movies");
          cy.get("header").find(".MuiToolbar-root").find("button").eq(4).click();
                cy.get("h3").contains("Now Playing Movies ");
                
          cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
                cy.get("h3").contains("Popular Movies ");
                
          cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();
                cy.get("h3").contains("Top Rated Movies ");
               
         
          
        });

        });
      
  });