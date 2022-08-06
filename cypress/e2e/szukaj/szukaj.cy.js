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

  it("clicks the tabs", () => {
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

  it("checks for filters", () => {
    ["Kategoria", "Polecane", "Przedział cenowy", "Marka"].forEach(
      (tabName) => {
        cy.get(".filter__name").contains(tabName);
      }
    );
  });

  it("finds krem", () => {
    const INPUT_SELECTOR = ".modal-search__input.form-control";

    cy.contains("Szukaj produktów").click({ force: true });
    cy.get(INPUT_SELECTOR).type("krem{enter}");

    cy.contains("Wyniki wyszukiwania: krem");

    cy.contains("Wyczyść").click();
    cy.contains("Wyniki wyszukiwania");
    cy.contains("Wyniki wyszukiwania: krem").should("not.exist");
  });

  it("handles autocomplete", () => {
    const INPUT_SELECTOR = ".modal-search__input.form-control";

    cy.contains("Szukaj produktów").click({ force: true });
    cy.get(INPUT_SELECTOR).type("klem{enter}");

    cy.contains("Brak wyników dla: klem");
    cy.contains("Może chodziło Ci o: krem");

    cy.contains("Wyczyść").click();

    cy.contains("Wyniki wyszukiwania");

    cy.contains("Brak wyników dla: klem").should("not.exist");
    cy.contains("Może chodziło Ci o: krem").should("not.exist");
  });
});
