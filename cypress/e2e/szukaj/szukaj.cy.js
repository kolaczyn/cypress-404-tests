/// <reference types="cypress" />

describe("/szukaj", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visitPage("/szukaj");
  });

  it.skip("checks if no 404", () => {
    cy.checkIfNo404();
    cy.contains("Wyniki wyszukiwania");
  });

  it.only("clicks the tabs", () => {
    // TODO remove classes selector and use e.g. data-cy="products-tab"
    const CLASSES_SELECTOR = ".types-filter__link";
    cy.get(CLASSES_SELECTOR).contains("Produkty").click();
    cy.get(CLASSES_SELECTOR).contains("Inspiracje").click();
    cy.get(CLASSES_SELECTOR).contains("Wszystko").click();
  });
});
