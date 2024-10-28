import { faker } from "@faker-js/faker";
import utilisFunction from "./utilisFunction";
const utilis = new utilisFunction();
const password = utilis.randomPassword();
const email = utilis.randomEmail();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
class Register {
  Registerbutton() {
    cy.get(".ico-register").click();
  }
  gendorSelector() {
    cy.get("#gender-male").click();
  }
  addName() {
    cy.get("#FirstName").type(firstName);
    cy.get("#LastName").type(lastName);
  }
  addEmailPassword() {
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(password);
  }
  clickRegisterButton() {
    cy.get("#register-button").click();
  }
}
class login {
  loginButton() {
    cy.get(".ico-login").click();
  }
  addEmail() {
    cy.get("#Email").type(email);
  }
  addPassword() {
    cy.get("#Password").type(password);
  }
  clickLoginButton() {
    cy.get(".button-1.login-button").click();
  }
}
export { Register, login };
