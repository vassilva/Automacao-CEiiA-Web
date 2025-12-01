import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homepage } from "../../support/pages/homepage";

Given("que estou na homepage", () => {
  homepage.visit();
  homepage.isLoaded();
});

When("clico na opção {string} no menu lateral", (label) => {
  homepage.clickSideMenuOption(label);
});

Then("devo ser redirecionado para a página {string}", (label) => {
  homepage.assertPageHeadingContains(label);
});

Then("o URL deve conter {string}", (path) => {
  homepage.assertUrlContains(path);
});

Given("que estou na opção {string}", (label) => {
  homepage.visit();
  homepage.isLoaded();
  homepage.clickSideMenuOption(label);
});

Given("quero voltar para homepage", () => {
  
});

Then("devo ser direcionado a homepage", () => {
  homepage.assertOnHomepage();
});

Then("o URL exibida deve ser o da página inicial", () => {
  homepage.assertUrlIsHomepage();
});

Then("o conteúdo principal deve ser visível", () => {
  homepage.assertHeroBannerVisible();
});
