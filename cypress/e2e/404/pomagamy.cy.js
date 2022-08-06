/// <reference types="cypress" />

describe("/pomagamy", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomagamy");
    cy.checkIfNo404();
  });
});
