describe("Login and Logout Functionality Tests", () => {
  it("allows a user to log in and log out successfully", () => {
    // Visit the homepage once
    cy.visit("/");
    // Login steps
    cy.wait(2000); // Wait for elements to load
    cy.get("form[id='registerForm'").within(() => {
      cy.get(
        'button.btn.btn-outline-success[data-bs-target="#loginModal"]'
      ).should("be.visible");
    });
    // Click the login button
    cy.get('button.btn.btn-outline-success[data-bs-target="#loginModal"]')
      .eq(1)
      .click();

    // Wait for the modal
    cy.wait(1000);

    // Fill in the login form and submit
    cy.get("#loginModal").within(() => {
      cy.get('input#loginEmail[placeholder="name@example.com"]').type(
        "user66@stud.noroff.no"
      );
      cy.get("input#loginPassword").type("123456789");
      cy.get('button[type="submit"]').click();
    });
    // Check if login was successful
    cy.url().should("include", "view=profile&name=user_66");

    // Logout steps
    cy.get('button[data-auth="logout"]').should("be.visible").click();
    cy.url().should("not.include", "/profile");
    cy.get('button[data-bs-target="#loginModal"]').should("be.visible");

    // Check if the local/session storage has been cleared
    cy.window()
      .its("localStorage")
      .invoke("getItem", "auth_token")
      .should("be.null");
  });
});
