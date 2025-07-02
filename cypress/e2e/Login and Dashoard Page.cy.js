


describe('Admin Login page', () => {

  beforeEach(() => {
    // Visit and log in before each test
    cy.visit('https://dps-admin-ui.qa.interswitchng.com/');

    cy.get('input[type="email"]').type('olamide.john@interswitchng.com');
    cy.get('.MuiInputBase-root.css-1mbvqtf').find('input[type="password"]').type('Testqa1101!@#$%^');
    cy.get('button[type="submit"]').click();
  });

  it('Dashboard interactions', () => {
    cy.get('[data-testid="GridViewIcon"]').should('be.visible').click();
    
    cy.get('[data-testid="AddIcon"]')
      .parents('button')
      .should('contain.text', 'Add new company')
      .click({ force: true });

    cy.get('[data-testid="KeyboardBackspaceIcon"]')
      .should('exist')
      .parents('span[title="Back"]')
      .click();

    cy.get(':nth-child(27) > .MuiPaper-root > .MuiCardContent-root').click();
    cy.get('[data-testid="GridViewIcon"]').click();
    cy.get('[data-testid="AccountCircleIcon"]').click();
    cy.get('.MuiBackdrop-root').click();

    cy.get('[data-testid="NotificationsIcon"] > path').click();
    cy.get('.MuiInputBase-input').clear().type('quick');
    cy.get('.MuiCardContent-root').click();

    cy.get('[data-testid="GridViewIcon"] > path').click({ force: true });
    cy.get('.top__title__has__button > .MuiButtonBase-root').click();
    cy.get('.MuiButton-contained').click();

    cy.get('[data-testid="GridViewIcon"]').should('be.visible').click();
  });
});
