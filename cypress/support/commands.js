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

//------------------Sign UP-----------------------//

// Cypress.Commands.add("Register", (email, password) => {
//   cy.get("#gender-male").click();
//   cy.get("#FirstName").type(Text);
//   cy.get("#LastName").type(Text);
//   cy.get("#Email").type(email);
//   cy.get("#Password").type(password);
//   cy.get("#ConfirmPassword").type(password);
//   cy.get("#register-button").click();
// });

//------------Login--------------//
Cypress.Commands.add("Login", (email, password) => {
  cy.get(".ico-login").click();
  cy.get("#Email").type(email);
  cy.get("#Password").type(password);
  cy.get(".button-1.login-button").click();
  cy.get("a").contains("Johndoee1@gmail.com").should("be.visible");
});
//-------------- Logout------------------//
Cypress.Commands.add("logout", () => {
  cy.get(".ico-logout").click();
  cy.get(".ico-register").should("be.visible");
});
