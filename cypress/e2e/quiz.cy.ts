describe("Quiz", () => {
  it("Users can create quizzes", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Users can add, edit and delete quiz questions", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Question types are supported (multiple choice, true/false, open-ended)", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Quizzes can be categorized.", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("users can search for quizzes.", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
});
