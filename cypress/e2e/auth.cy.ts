// describe("Onboarding", () => {
//   it("Users can sign up", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

describe("Authentication", () => {
  it("Users can login", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="header-login-btn"]').click();

    cy.get('[data-testid="login-username"]').type("kev@gmail.com");
    cy.get('[data-testid="login-password"]').type("kev1234");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-cy="quiz-container"]').should("exist");
  });
  // it.skip("Users can logout", () => {
  //   cy.visit("http://localhost:3000");
  // });
  // it.skip("Users can reset their passwords", () => {
  //   cy.visit("http://localhost:3000");
  // });
});
