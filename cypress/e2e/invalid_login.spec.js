describe("Invalid Login Test", () => {
  it("shows an error message when the user inputs an invalid email format", () => {
    cy.visit("/");
    // Close the register modal if it's open
    cy.get("body").then($body => {
      if ($body.find("#registerModal").hasClass("show")) {
        cy.get("#registerModal .btn-close").click();
      }
    });

    // Now click the login button
    cy.wait(2000);
    cy.get('button.btn.btn-outline-success[data-bs-target="#loginModal"]')
      .eq(1)
      .click();
    cy.get("#loginModal").within(() => {
      cy.get("#loginEmail").type("invalid_email_format"); // Type an invalid email format
      cy.get("#loginPassword").type("any_password"); // Type any password
      cy.get('button[type="submit"]').click(); // Attempt to submit the form with the invalid email

      // Be sure that the validation message is displayed
      cy.get("#loginEmail:invalid").should("exist");
      cy.get("#loginEmail").then($input => {
        const validationMessage = $input[0].validationMessage;
        expect(validationMessage).to.match(
          /Please match the requested format. Only Noroff student or teacher emails are valid.|Please include an '@' in the email address/
        );
      });
    });
  });
});
