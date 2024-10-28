import Register from "../support/RegisterAuserPOM";
const register = new Register();

describe("Demo WebShop", () => {
  it.only("Register a New User using POM", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    register.RegisterAuser();
  });
  it("Login Using Command", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.Login("Johndoee1@gmail.com", "Hamza129");
  });
});

// cy.fixture("Registerdata").then((data) => {
//   cy.Register(data).click();
// });
