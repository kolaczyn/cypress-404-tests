/// <reference types="cypress" />

describe("/aplikacja-rossmann", () => {
  it("check if no 404", () => {
    cy.visitPage("/aplikacja-rossmann");
    cy.checkIfNo404();
  });
});
