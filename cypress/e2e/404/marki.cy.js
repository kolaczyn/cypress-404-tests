/// <reference types="cypress" />

describe("/marki", () => {
  it("check if no 404", () => {
    cy.visitPage("/marki");
    cy.checkIfNo404();
  });
});
