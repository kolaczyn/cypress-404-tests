/// <reference types="cypress" />

describe("/karty-charakterystyk", () => {
  it("check if no 404", () => {
    cy.visitPage("/karty-charakterystyk");
    cy.checkIfNo404();
  });
});
