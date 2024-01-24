// describe("Authentication Tests", () => {
//   beforeEach(() => {
//     cy.visit("/"); // Adjust this to your app's URL
//   });

//   it("allows a user to log in with valid credentials", () => {
//     // Check if Register Modal is open and close it
//     cy.get("#registerModal").then(modal => {
//       if (modal.is(":visible")) {
//         cy.get("#registerModal .btn-close").click({ force: true });
//       }
//     });

//     // Open the login modal
//     cy.get('button[data-bs-target="#loginModal"]').click({ force: true });

//     // Fill in the login form and submit
//     cy.get("#loginEmail").type("valid_user@example.com");
//     cy.get("#loginPassword").type("valid_password");
//     cy.get('#loginModal button[type="submit"]').click();

//     // Check if login was successful
//     cy.url().should("include", "/dashboard"); // Adjust based on the URL after login
//   });

//   it("does not allow a user to log in with invalid credentials", () => {
//     cy.get('.login-btn[data-bs-target="#loginModal"]').click();

//     // Fill in the login form with invalid credentials and submit
//     cy.get("#loginEmail").type("invalid_user@example.com");
//     cy.get("#loginPassword").type("invalid_password");
//     cy.get('#loginModal button[type="submit"]').click();

//     // Check for error message
//     cy.get(".login-error")
//       .should("be.visible")
//       .and("contain", "Invalid credentials");
//   });

//   it("allows a user to log out", () => {
//     cy.login(); // Assuming `cy.login()` is your custom command to log in a user

//     // Click the logout button
//     cy.get('button[data-auth="logout"]').click();

//     // Check if logout was successful
//     cy.url().should("not.include", "/dashboard");
//   });
// });
