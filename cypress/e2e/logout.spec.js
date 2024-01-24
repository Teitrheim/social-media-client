describe("Logout functionality", () => {
  it("allows the user to log out", () => {
    cy.get('button[data-auth="logout"]').click();
    cy.url().should("eq", "http://127.0.0.1:5500/index.html");
  });
});
