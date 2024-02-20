describe("Quiz", () => {
  it("Users can select and take quizzes", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("Timer functionality for timed quizzes", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
  it("Option to skip questions and return to them later.", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  });
});
