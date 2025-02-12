import { Header } from '../../../support/helpers/Header';

const header = new Header();

const url = '/design-cart';

describe(`Navigating to ${url} renders correctly`, () => {
  it('displays the Comic Store logo', () => {
    cy.visit(`http://localhost:3000${url}`);
    header.verifyLogo();

    cy.get('.checkout-button').contains('Checkout');
  });
});
