/// <reference types="cypress" />

describe("/aplikacja-rossmann", () => {
  it("check if no 404", () => {
    cy.visit("https://www.rossmann.pl/aplikacja-rossmann");
    cy.checkIfNo404();
    cy.contains("Nowy styl zakupów.");
  });
});
