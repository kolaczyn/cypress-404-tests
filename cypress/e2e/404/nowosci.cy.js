/// <reference types="cypress" />

describe("/nowosci", () => {
  it("check if no 404", () => {
    cy.visitPage("/nowosci");
    cy.checkIfNo404();
  });
});
