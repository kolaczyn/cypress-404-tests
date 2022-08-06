/// <reference types="cypress" />

describe("/drogerie", () => {
  it("check if no 404", () => {
    cy.visitPage("/drogerie");
    cy.checkIfNo404();
  });
});
