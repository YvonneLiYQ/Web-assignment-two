let movies;    // List of movies from TMDB

// Utility functions
// const filterByTitle = (movieList, string) =>
//   movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

// const filterByGenre = (movieList, genreId) =>
//   movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Upcoming Page ", () => {
 
  beforeEach(() => {
    cy.visit("/movies/login")

  });
  
    describe("correct username and psw test", () => {
      it("displays page header", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(9).find(".MuiButton-label").contains('Login');
        let userString = "sqmmmmm";
        let pswString = "sqm,1123";
        cy.get("#username").clear().type(userString);
        cy.get("#password").clear().type(pswString);
        cy.get("button[type='submit']").eq(0).click();
        cy.wait(6000)
        cy.get("header").find(".MuiToolbar-root").find("button").eq(9).find(".MuiButton-label").contains('Logout');
        // cy.get("header").find(".MuiToolbar-root").contains("login");
        // cy.get("header").find(".MuiToolbar-root").find("button");
      });
    })

    describe("incorrect username and psw test", () => {
      it("displays page header", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(9).find(".MuiButton-label").contains('Login');
        let userString = "xxx";
        let pswString = "sqm,1123";
        cy.get("#username").clear().type(userString);
        cy.get("#password").clear().type(pswString);
        cy.get("button[type='submit']").eq(0).click();
        cy.wait(6000)
        cy.get("header").find(".MuiToolbar-root").find("button").eq(9).find(".MuiButton-label").contains('Login');
        // cy.get("header").find(".MuiToolbar-root").contains("login");
        // cy.get("header").find(".MuiToolbar-root").find("button");
      });
    })


    // describe("Login test", () => {
    //     it("displays page header", () => {
    //       cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
    //       cy.url().should("include", `/login`);
    //       cy.get("button").eq(4);
      
    //     });
    //   })


});