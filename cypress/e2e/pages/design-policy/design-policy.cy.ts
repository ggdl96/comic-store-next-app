const url = '/design-policy';

describe(`go to ${url} renders correctly`, () => {
  it('contains the Policy title', () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains('Policy');
  });
});
