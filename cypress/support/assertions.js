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

export const isWhiteColor = (value) => {
  if (!value) return false;
  const v = String(value).trim().toLowerCase();
  if (v === "white") return true;
  if (v === "#fff" || v === "#ffffff") return true;
  const rgb = v.match(/^rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
  const rgba = v.match(/^rgba\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|0?\.\d+|1)\s*\)$/);
  const near255 = (r, g, b) => Number(r) >= 250 && Number(g) >= 250 && Number(b) >= 250;
  if (rgb && near255(rgb[1], rgb[2], rgb[3])) return true;
  if (rgba && near255(rgba[1], rgba[2], rgba[3]) && Number(rgba[4]) >= 0.95) return true;
  return false;
};

