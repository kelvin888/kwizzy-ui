describe("Authentication", () => {
  it("Users can login", () => {
    // Visit the base URL defined in the Cypress configuration
    console.log("envmt", Cypress.env("username"));
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));

    // Click on the login button
    // Wait for a specific condition
    cy.get('[data-testid="header-login-btn"]').click();

    // Type the username and password obtained from environment variables
    cy.get('[data-testid="login-username"]').type(Cypress.env("username"));
    cy.get('[data-testid="login-password"]').type(Cypress.env("password"));

    // Click on the login button
    cy.get('[data-testid="login-button"]').click();

    // Check if the quiz container exists after successful login
    cy.get('[data-cy="quiz-container"]').should("exist");
  });
});
