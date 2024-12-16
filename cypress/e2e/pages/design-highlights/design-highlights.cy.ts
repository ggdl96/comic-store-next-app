const id = '1234abc';
const url = 'design-highlights/' + id;

describe(`go to ${url} renders correctly`, () => {
  it("contains a comics title", () => {
    cy.visit(`http://localhost:3000/${url}`);
    cy.contains('comics');
  });
});
