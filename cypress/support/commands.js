Cypress.Commands.add("dismissCookies", () => {
  const texts = [
    "Aceitar",
    "Aceitar tudo",
    "Aceitar todos",
    "Aceitar todos os cookies",
    "Aceitar cookies",
    "OK",
    "Fechar",
    "Accept",
    "Accept all",
    "Allow all",
    "I agree",
    "Got it",
    "Close",
    "Salvar e aceitar"
  ];

  const selectors = [
    "#onetrust-accept-btn-handler",
    "#onetrust-pc-btn-handler",
    "#CybotCookiebotDialogBodyButtonAccept",
    "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
    "[data-cookieyes=accept]",
    ".cookie-accept-btn",
    ".cc-accept",
    ".cc-dismiss",
    ".cookie-modal_closebutton",
    "button[aria-label*='Aceitar']",
    "button[aria-label*='Fechar']",
    "button[aria-label*='Close']",
    "[aria-label*='Aceitar']",
    "[aria-label*='Fechar']",
    "[aria-label*='Close']"
  ];

  cy.wait(300);
  cy.get("body", { timeout: 10000 }).then(($body) => {
    let clicked = false;
    selectors.forEach((sel) => {
      if (clicked) return;
      const el = $body.find(sel).filter(":visible").first();
      if (el.length) {
        const node = el.get(0);
        if (node) {
          node.click();
          clicked = true;
        }
      }
    });
    if (!clicked) {
      texts.forEach((t) => {
        if (clicked) return;
        const el = $body
          .find("button, [role=button], a")
          .filter(function () {
            const txt = (this.textContent || "").toLowerCase();
            return txt.includes(t.toLowerCase());
          })
          .filter(":visible")
          .first();
        if (el.length) {
          const node = el.get(0);
          if (node) {
            node.click();
            clicked = true;
          }
        }
      });
    }
  });
  cy.wait(200);
});

Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  originalFn(url, options);
  cy.dismissCookies();
});

