/// <reference types="cypress" />

describe("/pomagamy2018", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomagamy2018");
    cy.checkIfNo404();
  });
});
