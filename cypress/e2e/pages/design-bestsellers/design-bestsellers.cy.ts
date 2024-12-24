const url = 'design-bestsellers';

describe(`go to ${url} renders correctly`, () => {
  it("contains a comics title and Bestsellers", () => {
    cy.visit(`http://localhost:3000/${url}`);
    cy.contains('comics');
    cy.contains('Bestsellers');
  });

  it("contains sections", () => {
    cy.visit(`http://localhost:3000/${url}`);
    cy.contains('All Time');
    cy.contains('Past Year');
    cy.contains('Past Month');
  });
});
