/// <reference types="cypress" />

describe("/newsletter", () => {
  it("check if no 404", () => {
    cy.visitPage("/newsletter");
    cy.checkIfNo404();
  });
});
