/// <reference types="cypress" />

describe("/szukaj", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visitPage("/szukaj");
  });

  it("checks if no 404", () => {
    cy.checkIfNo404();
    cy.contains("Wyniki wyszukiwania");
  });

  it.only("clicks the tabs", () => {
    // TODO remove classes selector and use e.g. data-cy="products-tab"
    const TAB_SELECTOR = ".types-filter__link";
    const RESULTS_SELECTOR = ".h4.fx";

    cy.get(RESULTS_SELECTOR).contains(/wynik|wyniki|wyników/g);

    cy.get(TAB_SELECTOR).contains("Inspiracje").click();
    cy.get(RESULTS_SELECTOR).contains(/inspiracja|inspiracje|inspiracji/g);

    cy.get(TAB_SELECTOR).contains("Produkty").click();
    cy.get(RESULTS_SELECTOR).contains(/produkt|produkty|produktów/g);

    cy.get(TAB_SELECTOR).contains("Wszystko").click();
    cy.get(RESULTS_SELECTOR).contains(/wynik|wyniki|wyników/g);
  });

  it.only("checks for filters", () => {
    ["Kategoria", "Polecane", "Przedział cenowy", "Marka"].forEach(
      (tabName) => {
        cy.get(".filter__name").contains(tabName);
      }
    );
  });
});
