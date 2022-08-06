/// <reference types="cypress" />

describe("/produkty", () => {
  it("check if no 404", () => {
    cy.visitPage("/produkty");
    cy.checkIfNo404();
  });
});
