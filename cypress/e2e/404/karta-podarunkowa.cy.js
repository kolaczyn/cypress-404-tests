/// <reference types="cypress" />

describe("/karta-podarunkowa", () => {
  it("check if no 404", () => {
    cy.visitPage("/karta-podarunkowa");
    cy.checkIfNo404();
  });
});
