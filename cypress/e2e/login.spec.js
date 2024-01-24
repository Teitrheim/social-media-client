// describe("Login Test", () => {
//   it("allows the user to log in with valid credentials", () => {
//     cy.visit("http://127.0.0.1:5500/index.html");

//     // Ensure the register modal is not displayed
//     cy.get("#registerModal").then($modal => {
//       if ($modal.hasClass("show")) {
//         cy.get("#registerModal .btn-close").click();
//       }
//     });

//     // Click the login button to display the login modal
//     cy.get("button.login-btn").click({ force: true });

//     // Type in email and password
//     cy.get('#loginForm input[name="email"]').type("valid_user@example.com", {
//       force: true,
//     });
//     cy.get('#loginForm input[name="password"]').type("valid_password", {
//       force: true,
//     });

//     // Submit the login form
//     cy.get("#loginForm").submit();

//     // Verify the redirected URL to confirm login success
//     cy.url().should("eq", "http://127.0.0.1:5500/?view=profile&name=user_66");
//   });
// });

describe("Login functionality", () => {
  it("allows the user to log in with valid credentials", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    // Trigger the login modal to open
    cy.get('button[data-bs-target="#loginModal"]').click();

    // Wait for the modal to be visible
    cy.get("#loginModal").should("be.visible");

    // Now attempt to type in the email and password
    cy.get('#loginForm input[name="email"]').type("valid_user@example.com");
    cy.get('#loginForm input[name="password"]').type("valid_password");

    // Submit the form
    cy.get("#loginForm").submit();

    // Check the URL to ensure that login was successful
    cy.url().should("include", "/profile"); // Adjust according to actual redirect URL
  });
});
