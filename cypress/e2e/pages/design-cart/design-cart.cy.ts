const url = "/design-cart";

describe(`go to ${url} renders correctly`, () => {
  it("contains the comics title and Checkout title", () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains("comics");

    cy.get('.checkout-button').contains('Checkout');
  });
});
