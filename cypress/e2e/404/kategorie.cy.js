/// <reference types="cypress" />

describe("/kategorie", () => {
  it("check if no 404", () => {
    cy.visitPage("/kategorie");
    cy.checkIfNo404();
  });
});
