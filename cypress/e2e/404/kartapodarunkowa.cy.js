/// <reference types="cypress" />

describe("/kartapodarunkowa", () => {
  it("check if no 404", () => {
    cy.visitPage("/kartapodarunkowa");
    cy.checkIfNo404();
  });
});
