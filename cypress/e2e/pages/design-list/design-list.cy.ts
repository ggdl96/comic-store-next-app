const url = 'design-list';

describe(`go to ${url} renders correctly`, () => {
  it("contains a comics title", () => {
    cy.visit(`http://localhost:3000/${url}`);
    cy.contains('comics');
  });
});
