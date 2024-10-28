import Register from "./RegisterAuserPOM";
const register = new Register();
const email = register.getcredentials();
const password = register.getcredentials();
class login {
  loginButton() {
    cy.get(".ico-login").click();
  }
  addEmail() {
    cy.get("#Email").type(email.email);
  }
  addPassword() {
    cy.get("#Password").type(password.password);
  }
  clickLoginButton() {
    cy.get(".button-1.login-button").click();
  }
  veryfiyLogin() {
    cy.get("a").contains("@gmail.com").should("be.visible");
  }
}
export default login;
