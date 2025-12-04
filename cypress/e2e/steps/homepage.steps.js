import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homepage } from "../../support/pages/homepage";

Given("que acesso a URL principal do CEiiA", () => {
  homepage.visit();
  cy.wait(1000);
});

When("a homepage for carregada", () => {
  homepage.isLoaded();
  cy.wait(1000);
});

Then("o logotipo {string} deve estar visível no canto superior esquerdo", () => {
  homepage.assertLogoTopLeft();
  cy.wait(1000);
});

Then("o menu lateral deve estar visível no canto superior direito", () => {
  homepage.assertMenuTopRight();
  cy.wait(1000);
});

Then("o banner principal deve ser exibido corretamente", () => {
  homepage.assertHeroBannerVisible();
  cy.wait(1000);
});

Then("nenhuma mensagem de erro deve aparecer na página", () => {
  homepage.assertNoErrorsVisible();
  cy.wait(1000);
});

Given("que estou na homepage do CEiiA", () => {
  homepage.visit();
  cy.wait(1000);
  homepage.isLoaded();
  cy.wait(1000);
});

When("clico no logotipo {string}", () => {
  homepage.clickLogo();
  cy.wait(1000);
});

Then("não devo sair da homepage", () => {
  homepage.assertOnHomepage();
  cy.wait(1000);
});

Then("o URL deve continuar sendo o da página inicial", () => {
  homepage.assertUrlIsHomepage();
  cy.wait(1000);
});

Then("o conteúdo principal deve permanecer visível", () => {
  homepage.assertHeroBannerVisible();
  cy.wait(1000);
});
