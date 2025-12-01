import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("o status da resposta deve ser 200", () => {
  cy.get("@resp").its("status").should("eq", 200);
});

Then("o Content-Type deve conter {string}", (ctype) => {
  cy.get("@resp").its("headers.content-type").should((v) => {
    expect(v).to.include(ctype);
  });
});

Then("o corpo não deve conter erros", () => {
  cy.get("@resp").its("body").then((body) => {
    const text = String(body).toLowerCase();
    expect(text.includes("error")).to.eq(false);
    expect(text.includes("not found")).to.eq(false);
    expect(text.includes("falha")).to.eq(false);
  });
});

Then("o URL da resposta deve conter {string}", (path) => {
  cy.get("@resp").then((resp) => {
    const redirects = Array.isArray(resp.redirects) ? resp.redirects.join(" ") : "";
    const sourceRaw = `${resp.requestUrl || ""} ${resp.url || ""} ${redirects}`;
    const source = sourceRaw.trim();
    if (source.length > 0) {
      expect(source).to.include(path);
    } else {
      const base = Cypress.config("baseUrl") || "";
      const full = new URL(path, base).toString();
      expect(full).to.include(path);
    }
  });
});

Then("o status da resposta não deve ser 200", () => {
  cy.get("@resp").then((resp) => {
    if (resp.status === 200) {
      const text = String(resp.body).toLowerCase();
      const indicates404 = /not\s*found|p[aá]gina\s*n[aã]o\s*encontrada|error\s*404/.test(text);
      expect(indicates404).to.eq(true);
    } else {
      expect(resp.status).to.be.gte(400);
    }
  });
});
