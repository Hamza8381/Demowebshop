import { Register } from "../support/RegisterAuserPOM";
import { login } from "../support/RegisterAuserPOM";
const Login = new login();
const register = new Register();
describe("Demo WebShop", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Register a New User using POM", () => {
    register.Registerbutton();
    register.gendorSelector();
    register.addName();
    register.addEmailPassword();
    register.clickRegisterButton();
    register.verifyRegistration();
  });

  it("Login a user with registered randomEmail/Password", () => {
    Login.loginButton();
    Login.addEmail();
    Login.addPassword();
    Login.clickLoginButton();
    Login.veryfiyLogin();
  });
});
