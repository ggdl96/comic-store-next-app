const url = '/design';

describe(`go to ${url} renders correctly`, () => {
  it("contains the comics title", () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains('comics');
  });
});
