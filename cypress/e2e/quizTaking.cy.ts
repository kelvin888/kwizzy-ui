describe("Quiz", () => {
  it("Users can select and take quizzes", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Timer functionality for timed quizzes", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Option to skip questions and return to them later.", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
});
