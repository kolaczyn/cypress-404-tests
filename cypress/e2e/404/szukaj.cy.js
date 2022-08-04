/// <reference types="cypress" />

describe("/szukaj", () => {
  it("check if no 404", () => {
    cy.visit("https://www.rossmann.pl/szukaj");
    cy.checkIfNo404();
    cy.contains("Wyniki wyszukiwania");
  });
});
