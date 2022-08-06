/// <reference types="cypress" />

describe("/inspiracje", () => {
  it("check if no 404", () => {
    cy.visitPage("/inspiracje");
    cy.checkIfNo404();
  });
});
