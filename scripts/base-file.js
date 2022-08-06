/// <reference types="cypress" />

describe("/__FILENAME__", () => {
  it("check if no 404", () => {
    cy.visitPage("/__FILENAME__");
    cy.checkIfNo404();
  });
});
