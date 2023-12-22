let actors;    

// Utility functions
const filterByTitle = (ActorList, string) =>
  ActorList.filter((a) => a.name.toLowerCase().search(string) !== -1);


describe("Actor Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/movies/actor")
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h1").contains("Filter the actors");
      });
    });
    describe("Filtering", () => {
        describe("By actor name", () => {
            it("should only display actor with r in the name", () => {
              let searchString = "r";
              let matchingActors = filterByTitle(actors, searchString);
              cy.get("#filled-search").clear().type(searchString); // Enter m in text box
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingActors.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingActors[index].name);
              });
            })
            it("should only display actors with o in the name", () => {
              let searchString = "o";
              let matchingActors = filterByTitle(actors, searchString);
              cy.get("#filled-search").clear().type(searchString); // Enter m in text box
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingActors.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingActors[index].name);
              });

            });
            it("should only display actors with xyz in the name", () => {
                let searchString = "xyz";
                let matchingActors = filterByTitle(actors, searchString);
                cy.get("#filled-search").clear().type(searchString);
                cy.get(".MuiCardHeader-content").should(
                  "have.length",
                    matchingActors.length
                );

              })
          })
      });
       
  });

  
  