


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
  it.only('Add Account flow', () => {
    cy.get('[data-testid="GridViewIcon"]').click();
    cy.get('.top__title__has__button > .MuiButtonBase-root').click();
    cy.get('.formarea__main > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear('Al halil');
    cy.get('.formarea__main > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Al halil1');
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear('R');
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Ronaldo');
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').clear('g');
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('Goated');
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').click();
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').clear('l');
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('olamide.john@interswitchng.com');
    cy.get('#corporate_country').clear('n');
    cy.get('#corporate_country').type('nig');
    cy.get('#corporate_country-option-1').click();
    cy.get('body').click();
    cy.get('#mui-component-select-corporate_currency').click(); // Open dropdown
    cy.get('li[data-value="175"]')
     .should('be.visible').and('contain.text', 'Nigerian naira (₦)').click();
    cy.get('body').click();
    cy.get('#mui-component-select-corporate_language').click()
    cy.get('li[data-value="280"]').should('contain.text', 'English (eng)').click()
    cy.get('.css-h9xt8w > .MuiButton-contained').click();
    /*
    cy.get(':nth-child(1) > .permission__mgmt__r > .css-vb6e92 > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
    cy.get(':nth-child(1) > .permission__mgmt__r > .css-vb6e92 > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
    cy.get('.MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
    cy.get('.MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
    cy.get('.MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
    cy.get('.MuiButton-contained').click();
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear('O');
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('InterswitchNg');
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear('0');
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('012345678');
    cy.get('body').click();
    cy.get('[data-value="uat"]').click();
    cy.get('[style="position: absolute; right: 50%;"]').click();
    cy.get('.MuiButton-contained').click();  */
  });
})
