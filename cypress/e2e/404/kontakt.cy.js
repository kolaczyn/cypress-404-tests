/// <reference types="cypress" />

describe("/kontakt", () => {
  it("check if no 404", () => {
    cy.visitPage("/kontakt");
    cy.checkIfNo404();
  });
});
