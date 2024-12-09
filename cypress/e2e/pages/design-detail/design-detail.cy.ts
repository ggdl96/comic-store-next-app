const url = '/design-detail/abc1234';

describe(`go to ${url} renders correctly`, () => {
  it("contains an add to cart button and a buy now button", () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains('comics');

    cy.get('.add-to-cart-btn').contains('Add to cart');
    cy.get('.buy-now-btn').contains('Buy now');
  });
});
