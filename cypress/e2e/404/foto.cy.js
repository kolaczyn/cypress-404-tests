/// <reference types="cypress" />

describe("/foto", () => {
  it("check if no 404", () => {
    cy.visitPage("/foto");
    cy.checkIfNo404();
  });
});
