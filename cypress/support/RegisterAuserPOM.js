import { faker } from "@faker-js/faker";
import utilisFunction from "./utilisFunction";
const utilis = new utilisFunction();
const password = utilis.randomPassword();
const email = utilis.randomEmail();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
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
  addEmail() {
    cy.get("#Email").type(email);
  }
  addPassword() {
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(password);
  }
  clickRegisterButton() {
    cy.get("#register-button").click();
  }
  verifyRegistration() {
    cy.get("div").contains("Your registration completed").should("be.visible");
  }
  getcredentials() {
    return { email: email, password: password };
  }
}

export default Register;
