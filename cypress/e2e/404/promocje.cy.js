/// <reference types="cypress" />

describe("/promocje", () => {
  it("check if no 404", () => {
    cy.visitPage("/promocje");
    cy.checkIfNo404();
  });
});
