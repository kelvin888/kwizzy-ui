describe("Quiz", () => {
  it("Users can create quizzes", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("Users can add, edit and delete quiz questions", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("Question types are supported (multiple choice, true/false, open-ended)", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("Quizzes can be categorized.", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("users can search for quizzes.", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
});
