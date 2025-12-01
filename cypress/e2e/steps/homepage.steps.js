import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homepage } from "../../support/pages/homepage";

Given("que acesso a URL principal do CEiiA", () => {
  homepage.visit();
});

When("a homepage for carregada", () => {
  homepage.isLoaded();
});

Then("o logotipo {string} deve estar visível no canto superior esquerdo", () => {
  homepage.assertLogoTopLeft();
});

Then("o menu lateral deve estar visível no canto superior direito", () => {
  homepage.assertMenuTopRight();
});

Then("o banner principal deve ser exibido corretamente", () => {
  homepage.assertHeroBannerVisible();
});

Then("nenhuma mensagem de erro deve aparecer na página", () => {
  homepage.assertNoErrorsVisible();
});

Given("que estou na homepage do CEiiA", () => {
  homepage.visit();
  homepage.isLoaded();
});

When("clico no logotipo {string}", () => {
  homepage.clickLogo();
});

Then("não devo sair da homepage", () => {
  homepage.assertOnHomepage();
});

Then("o URL deve continuar sendo o da página inicial", () => {
  homepage.assertUrlIsHomepage();
});

Then("o conteúdo principal deve permanecer visível", () => {
  homepage.assertHeroBannerVisible();
});
