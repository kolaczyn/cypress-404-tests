Cypress.Commands.add("checkIfNo404", () => {
  cy.contains("Błąd 404").should("not.exist");
});

Cypress.Commands.add("visitPage", (path) => {
  cy.visit(`${Cypress.env("host")}${path}`);
});
