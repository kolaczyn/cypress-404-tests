/// <reference types="cypress" />

describe("/drogeria-online", () => {
  it("check if no 404", () => {
    cy.visitPage("/drogeria-online");
    cy.checkIfNo404();
  });
});
