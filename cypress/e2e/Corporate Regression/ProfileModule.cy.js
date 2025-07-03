describe('User Management', () => {

  beforeEach(() => {
    // Visit and log in before each test
    cy.visit('https://dps-admin-ui.qa.interswitchng.com/');

    cy.get('input[type="email"]').type('olamide.john@interswitchng.com');
    cy.get('.MuiInputBase-root.css-1mbvqtf').find('input[type="password"]').type('Testqa1101!@#$%^');
    cy.get('button[type="submit"]').click();
  });

  it('Add Profile', () => {
    cy.get('[data-testid="GridViewIcon"]').click();
    cy.get('.MuiInputBase-input').clear('re');
    cy.get('.MuiInputBase-input').type('regression');
    cy.get('.MuiCardContent-root').click();
  });
})