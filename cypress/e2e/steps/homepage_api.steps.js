import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a API da homepage", () => {
  cy.request({ url: "/", failOnStatusCode: false }).as("resp");
});

Given("que acesso a API inválida {string}", (path) => {
  cy.request({ url: path, failOnStatusCode: false }).as("resp");
});
