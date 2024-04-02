const url = '/design-checkout';

describe(`go to ${url} renders correctly`, () => {
  it("has a comics title, a checkout button and a go back button", () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains('comics');

    cy.contains('Checkout');

    cy.get('.go-back-btn').contains('Go back')
  });
});
