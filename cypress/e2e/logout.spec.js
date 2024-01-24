describe("Logout functionality", () => {
  it("allows the user to log out", () => {
    // Need to be logged in first
    // ... login steps here
    cy.get('button[data-auth="logout"]').click();
    cy.url().should("eq", "http://127.0.0.1:5500/index.html"); // Assuming user is redirected to home
  });
});
