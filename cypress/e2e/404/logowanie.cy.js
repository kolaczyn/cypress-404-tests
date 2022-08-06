/// <reference types="cypress" />

describe("/logowanie", () => {
  it("check if no 404", () => {
    cy.visitPage("/logowanie");
    cy.checkIfNo404();
  });
});
