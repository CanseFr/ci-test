describe("Test CI Cypress", () => {
  it("should verify db info and increment button value", () => {
    cy.visit("http://localhost:3000");
    cy.contains("What's new in Prisma? (Q1/22)")
      .should("be.visible");
    cy.contains("Increment").click().click();
    cy.contains("Count : 2").should("be.visible");
  });
});