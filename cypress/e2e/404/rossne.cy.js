/// <reference types="cypress" />

describe("/rossne", () => {
  it("check if no 404", () => {
    cy.visitPage("/rossne");
    cy.checkIfNo404();
  });
});
