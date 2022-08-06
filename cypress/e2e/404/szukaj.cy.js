/// <reference types="cypress" />

describe("/szukaj", () => {
  it("check if no 404", () => {
    cy.visitPage("/szukaj");
    cy.checkIfNo404();
  });
});
