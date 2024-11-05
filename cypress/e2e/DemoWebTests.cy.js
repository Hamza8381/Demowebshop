import Register from "../support/RegisterAuserPOM";
import login from "../support/LoginRegisteredUser";
import registeration from "../support/registerusingobj";
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
    register.addEmail();
    register.addPassword();
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
  it("should login then Logout", () => {
    Login.loginButton();
    Login.addEmail();
    Login.addPassword();
    Login.clickLoginButton();
    Login.veryfiyLogin();
    cy.logout();
  });
  it("Register a New User using POM", () => {
    registeration.Registerbutton();
    registeration.gendorSelector();
    registeration.addName();
    registeration.addEmail();
    registeration.addPassword();
    registeration.clickRegisterButton();
    registeration.verifyRegistration();
  });
  it.only("Register a New User by calling single function", () => {
    registeration.Registernewuser();
  });
});
