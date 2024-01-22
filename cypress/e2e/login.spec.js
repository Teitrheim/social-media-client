describe("Login Test", () => {
  it("allows the user to log in with valid credentials", () => {
    // Visit the login page
    cy.visit("/login");

    // Fill in the login form
    cy.get('input[name="email"]').type("valid_user@example.com");
    cy.get('input[name="password"]').type("valid_password");

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that the login was successful
    // This could be checking for a URL change, looking for a logout button, etc.
    cy.url().should("include", "/profile");
  });
});
