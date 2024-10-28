import { faker } from "@faker-js/faker";
const randomemail = Math.random().toString(36).substring(2, 15) + "@gmail.com";
const randompassword = Math.random().toString(36).substring(2, 15) + "";

class Register {
  RegisterAuser() {
    cy.get(".ico-register").click();
    cy.get("#gender-male").click();
    cy.get("#FirstName").type(faker.name.firstName());
    cy.get("#LastName").type(faker.name.lastName());
    cy.get("#Email").type(randomemail);
    cy.get("#Password").type(randompassword);
    cy.get("#ConfirmPassword").type(randompassword);
    cy.get("#register-button").click();
    cy.get("div").contains("Your registration completed").should("be.visible");
  }
}

export default Register;
