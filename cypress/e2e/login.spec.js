describe("Login Functionality Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows a user to log in with valid credentials", () => {
    cy.wait(2000);
    // Ensure that the login button is visible
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
  });
});
