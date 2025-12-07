import { expectWithMsg, assertNoErrorTexts } from "../assertions";

export class HomePage {
  visit() {
    cy.visit("/");
    cy.dismissCookies();
  }

  isLoaded() {
    cy.get("body", { timeout: 10000 }).should("be.visible");
    cy.dismissCookies();
  }

  assertLogoTopLeft() {
    
    cy.get(
      'img[alt="CEiiA"], [aria-label^="CEiiA"], a[href="/"] img, a[href="/"] svg'
    , { timeout: 10000 })
      .first()
      .then(($el) => {
        expectWithMsg($el, "CEiiA logo should be visible").to.be.visible;
        const rect = $el[0].getBoundingClientRect();
        expectWithMsg(rect.top, "Logo should be at top area").to.be.lessThan(160);
        expectWithMsg(rect.left, "Logo should be near left side").to.be.lessThan(120);

        // Visual proof: highlight and capture screenshot
        cy.wrap($el)
          .scrollIntoView()
          .invoke("css", "outline", "3px solid #ff00aa")
          .screenshot("logo-top-left", { capture: "viewport" });

        const evidenceClick = Cypress.env("evidenceClick");
        if (evidenceClick) {
          cy.wrap($el).click({ force: true });
          cy.wait(1500);
          cy.screenshot("logo-click-evidence", { capture: "viewport" });
        }
      });
  }

  clickLogo() {
    cy.get(
      'img[alt="CEiiA"], [aria-label^="CEiiA"], a[href="/"] img, a[href="/"] svg'
    , { timeout: 10000 })
      .first()
      .scrollIntoView()
      .click();
  }

  assertOnHomepage() {
    cy.location("pathname").should("eq", "/");
  }

  assertUrlIsHomepage() {
    const base = Cypress.config("baseUrl");
    const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`^${escaped}/?$`);
    cy.url().should("match", re);
  }

  clickSideMenuOption(label) {
    cy.get(
      '[aria-label*="'+label+'" i], [alt*="'+label+'" i], a[href*="/'+label.toLowerCase()+'" i]'
    , { timeout: 12000 })
      .filter(":visible")
      .first()
      .click({ force: true });
  }

  assertPageHeadingContains(text) {
    const esc = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    cy.contains("h1", new RegExp(esc, "i"), { timeout: 12000 }).should("be.visible");
  }
  assertUrlContains(path) {
    cy.url({ timeout: 12000 }).should("include", path);
  }
  assertMenuTopRight() {
   
    cy.get(
      'button[aria-label*="menu" i], [class*="menu" i], [data-menu], nav button, button[aria-label*="open" i]'
    , { timeout: 10000 })
      .filter(":visible")
      .first()
      .then(($btn) => {
        expectWithMsg($btn, "Side menu control should be visible").to.be.visible;
        const rect = $btn[0].getBoundingClientRect();
        cy.window().then((win) => {
          const viewportWidth = win.innerWidth;
          expectWithMsg(rect.top, "Menu should be at top area").to.be.lessThan(220);
          expectWithMsg(
            viewportWidth - rect.right,
            "Menu should be near right side"
          ).to.be.lessThan(140);
        });
      });
  }

  assertHeroBannerVisible() {
    cy.get("body", { timeout: 12000 }).then(($b) => {
      const primary = $b
        .find('h1, [class*="hero"], [class*="banner"]')
        .filter(":visible")
        .first();
      if (primary.length) {
        expectWithMsg(primary, "Hero banner should be visible").to.exist;
        return;
      }
      const fallback = $b
        .find("main, [role='main'], section")
        .filter(":visible")
        .first();
      expectWithMsg(fallback, "Main content should be visible").to.exist;
    });
  }

  assertNoErrorsVisible() {
    assertNoErrorTexts([
      "error",
      "falha",
      "oops",
      "não encontrado",
      "not found",
      "failed",
      "internal server error"
    ]);
    
    cy.get("body").then(($b) => {
      const text = $b.text().toLowerCase();
      expectWithMsg(
        !text.includes("stack trace") && !text.includes("uncaught"),
        "No exception messages should appear"
      ).to.be.true;
    });
  }
}

export const homepage = new HomePage();
