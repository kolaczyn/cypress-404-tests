/// <reference types="cypress" />

describe("/pomagamy2020", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomagamy2020");
    cy.checkIfNo404();
  });
});
