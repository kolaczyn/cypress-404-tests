/// <reference types="cypress" />

describe("/regulaminy", () => {
  it("check if no 404", () => {
    cy.visitPage("/regulaminy");
    cy.checkIfNo404();
  });
});
