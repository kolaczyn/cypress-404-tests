/// <reference types="cypress" />

describe("/pomagamy2019", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomagamy2019");
    cy.checkIfNo404();
  });
});
