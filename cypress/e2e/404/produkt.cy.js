/// <reference types="cypress" />

describe("/produkt", () => {
  it("check if no 404", () => {
    cy.visitPage("/produkt");
    cy.checkIfNo404();
  });
});
