/// <reference types="cypress" />

describe("/klub", () => {
  it("check if no 404", () => {
    cy.visitPage("/klub");
    cy.checkIfNo404();
  });
});
