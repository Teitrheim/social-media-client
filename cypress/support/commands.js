// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/"); // Navigate to the base URL or login page

  // Open the login modal
  cy.get('button[data-bs-target="#loginModal"]').click();

  // Fill in the login form and submit
  cy.get("#loginEmail").type(email);
  cy.get("#loginPassword").type(password);
  cy.get('#loginModal button[type="submit"]').click();

  // Add any necessary checks to ensure the login was successful
  // For example, you might check for the presence of a logout button
  cy.get('button[data-auth="logout"]').should("be.visible");
});
