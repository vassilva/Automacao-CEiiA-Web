import { Given } from "@badeball/cypress-cucumber-preprocessor";

const slugMap = {
  mobility: "/mobility",
  aeronautics: "/aeronautics",
};

Given("que acesso a API da página {string}", (label) => {
  const key = String(label).toLowerCase();
  const path = slugMap[key] || `/${key}`;
  cy.request({ url: path, failOnStatusCode: false }).as("resp");
});


