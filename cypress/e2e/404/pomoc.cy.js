/// <reference types="cypress" />

describe("/pomoc", () => {
  it("check if no 404", () => {
    cy.visitPage("/pomoc");
    cy.checkIfNo404();
  });
});
