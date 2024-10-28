import { faker } from "@faker-js/faker";
import utilisFunction from "./utilisFunction";
const utilis = new utilisFunction();
const password = utilis.randomPassword();
class Register {
  RegisterAuser() {
    cy.get(".ico-register").click();
    cy.get("#gender-male").click();
    cy.get("#FirstName").type(faker.name.firstName());
    cy.get("#LastName").type(faker.name.lastName());
    cy.get("#Email").type(utilis.randomEmail());
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(password);
    cy.get("#register-button").click();
    cy.get("div").contains("Your registration completed").should("be.visible");
  }
}

export default Register;
