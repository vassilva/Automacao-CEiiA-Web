import "./assertions";
import "./commands";
beforeEach(() => {
  const name = (Cypress.spec && Cypress.spec.name) || "";
  const isApi = /_api\.feature$/i.test(name);
  if (isApi) {
    cy.visit("/");
  }
  cy.dismissCookies();
});
afterEach(() => {
  cy.wait(2000);
});
