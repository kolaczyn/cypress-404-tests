/// <reference types="cypress" />

const BASE_PAGE_URL = "https://www.rossmann.pl";
const pagesToVisit = ["/szukaj"];

describe("404 check", () => {
  it("checks if any of the pages return 404", () => {
    const url = `${BASE_PAGE_URL}${pagesToVisit[0]}`;
    cy.visit(url);
    cy.contains("Błąd 404").should("not.exist");
    cy.contains("Wyniki wyszukiwania");
  });
});
