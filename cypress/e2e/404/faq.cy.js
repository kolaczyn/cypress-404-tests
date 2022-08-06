/// <reference types="cypress" />

describe("/faq", () => {
  it("check if no 404", () => {
    cy.visitPage("/faq");
    cy.checkIfNo404();
  });
});
