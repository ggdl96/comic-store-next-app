describe("go to / has a title and has an input spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("have.value", "");
    cy.title().should("eq", "Comics Store App");
  });
});
