import { faker } from "@faker-js/faker";
import utilisFunction from "./utilisFunction";
const utilis = new utilisFunction();
const password = utilis.randomPassword();
const email = utilis.randomEmail();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const registeration = {
  Registerbutton: function () {
    cy.get(".ico-register").click();
  },
  gendorSelector: function () {
    cy.get("#gender-male").click();
  },
  addName: function () {
    cy.get("#FirstName").type(firstName);
    cy.get("#LastName").type(lastName);
  },
  addEmail: function () {
    cy.get("#Email").type(email);
  },
  addPassword: function () {
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(password);
  },
  clickRegisterButton: function () {
    cy.get("#register-button").click();
  },
  verifyRegistration: function () {
    cy.get("div").contains("Your registration completed").should("be.visible");
  },
  getcredentials: function () {
    return { email: email, password: password };
  },

  Registernewuser: function () {
    this.Registerbutton();
    this.gendorSelector();
    this.addName();
    this.addEmail();
    this.addPassword();
    this.clickRegisterButton();
    this.verifyRegistration();
    this.getcredentials();
  },
};
export default registeration;
