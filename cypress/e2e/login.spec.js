describe("Login Functionality Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows a user to log in with valid credentials", () => {
    // Ensure that the login button is visible
    cy.get(
      'button.btn.btn-outline-success[data-bs-target="#loginModal"]'
    ).should("be.visible");

    // Click the login button
    cy.get('button.btn.btn-outline-success[data-bs-target="#loginModal"]')
      .eq(1)
      .click();

    // Wait for the modal
    cy.wait(500);

    // Fill in the login form and submit
    cy.get("#loginModal").within(() => {
      cy.get("#loginEmail").type("valid_user@example.com");
      cy.get("#loginPassword").type("valid_password");
      cy.get('button[type="submit"]').click();
    });

    // Check if login was successful
    cy.url().should("include", "/dashboard");
  });
});
