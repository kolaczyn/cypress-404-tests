/// <reference types="cypress" />

describe("/pomagamy2017", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomagamy2017");
    cy.checkIfNo404();
  });
});
