import Register from "../support/RegisterAuserPOM";
const register = new Register();
describe("Demo WebShop", () => {
  const BaseUrl = "https://demowebshop.tricentis.com/";
  beforeEach(() => {
    cy.visit(BaseUrl);
  });
  it.only("Register a New User using POM", () => {
    register.RegisterAuser();
  });
  it("Login Using Command", () => {
    cy.Login("Johndoee1@gmail.com", "Hamza129");
  });
});

// cy.fixture("Registerdata").then((data) => {
//   cy.Register(data).click();
// });
