import { Register } from "../support/RegisterAuserPOM";
import { login } from "../support/RegisterAuserPOM";
const Login = new login();
const register = new Register();
describe("Demo WebShop", () => {
  const BaseUrl = "https://demowebshop.tricentis.com/";
  beforeEach(() => {
    cy.visit(BaseUrl);
  });
  it("Register a New User using POM", () => {
    register.Registerbutton();
    register.gendorSelector();
    register.addName();
    register.addEmailPassword();
    register.clickRegisterButton();
    cy.get("div").contains("Your registration completed").should("be.visible");
  });

  it("Login a user with registered randomEmail/Password", () => {
    Login.loginButton();
    Login.addEmail();
    Login.addPassword();
    Login.clickLoginButton();
    cy.get("a").contains("@gmail.com").should("be.visible");
  });
});

// it("Logout Using Command", () => {
//   cy.logout();
// });
// cy.fixture("Registerdata").then((data) => {
//   cy.Register(data).click();
// });
// it("Logout Using Command", () => {
//   cy.logout();
// });
