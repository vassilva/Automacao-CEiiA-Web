import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { homepage } from "../../support/pages/homepage";

Then("o botão {string} deve ter a cor {string}", (label, cor) => {
  homepage.assertButtonColor(label, cor);
});

