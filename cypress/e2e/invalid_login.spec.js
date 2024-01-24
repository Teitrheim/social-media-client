describe("Login functionality", () => {
  it("does not allow the user to log in with invalid credentials", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#loginModal").invoke("show");
    cy.get('#loginForm input[name="email"]').type("invalid_user@example.com");
    cy.get('#loginForm input[name="password"]').type("wrong_password");
    cy.get("#loginForm").submit();
    cy.get(".alert").should("contain", "Invalid credentials"); // Assuming an alert class shows the message
  });
});
