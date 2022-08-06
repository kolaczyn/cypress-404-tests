/// <reference types="cypress" />

describe("/rejestracja", () => {
  it("check if no 404", () => {
    cy.visitPage("/rejestracja");
    cy.checkIfNo404();
  });
});
