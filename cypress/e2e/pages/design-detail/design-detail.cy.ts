import { Header } from '../../../support/helpers/Header';

const header = new Header();

const url = '/design-detail/abc1234';

describe(`Navigating to ${url} renders correctly`, () => {
  it('displays the Comic Store logo and contains an add to cart button and a buy now button', () => {
    cy.visit(`http://localhost:3000${url}`);
    header.verifyLogo();

    cy.get('.add-to-cart-btn').contains('Add to cart');
    cy.get('.buy-now-btn').contains('Buy now');
  });
});
