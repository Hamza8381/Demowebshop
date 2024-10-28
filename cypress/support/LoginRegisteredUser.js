import Register from "./RegisterAuserPOM";
const register = new Register();
const cred = register.getcredentials();
class login {
  loginButton() {
    cy.get(".ico-login").click();
  }
  addEmail() {
    cy.get("#Email").type(cred.email);
  }
  addPassword() {
    cy.get("#Password").type(cred.password);
  }
  clickLoginButton() {
    cy.get(".button-1.login-button").click();
  }
  veryfiyLogin() {
    cy.get("a").contains("@gmail.com").should("be.visible");
  }
}
export default login;
