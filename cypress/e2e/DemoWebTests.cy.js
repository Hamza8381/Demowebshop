import Register from "../support/RegisterAuserPOM";
const register = new Register();
describe("Demo WebShop", () => {
  const BaseUrl = "https://demowebshop.tricentis.com/";
  beforeEach(() => {
    cy.visit(BaseUrl);
  });
  it.only("Register a New User using POM", () => {
    register.Registerbutton();
    register.gendorSelector();
    register.addName();
    register.addEmailPassword();
    register.clickRegisterButton();
    cy.get("div").contains("Your registration completed").should("be.visible");
  });
  it("Login Using Command", () => {
    cy.Login("Johndoee1@gmail.com", "Hamza129");
  });
});

// cy.fixture("Registerdata").then((data) => {
//   cy.Register(data).click();
// });
// it("Logout Using Command", () => {
//   cy.logout();
// });
