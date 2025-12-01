// Lightweight custom assertions for clearer messages
// Usage: cy.get(selector).then(($el) => expectWithMsg($el, 'Logo should be visible').to.be.visible)

export const expectWithMsg = (actual, message) => {
  return expect(actual, message);
};

export const assertNoErrorTexts = (texts) => {
  texts.forEach((t) => {
    cy.contains(new RegExp(t, "i"), { timeout: 2000 }).should("not.exist");
  });
};

