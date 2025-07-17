/// <reference types="cypress" />

         import loginPage from '../Pages/loginPage';

describe('User Management', () => {

  beforeEach(() => {
    // Visit and log in before each test
     const username = 'olamide.john@interswitchng.com';
     const password = 'Testqa1101!@#$%^';
    
        loginPage.visit();
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
  });

  it('Add Profile', () => {
    cy.get('[data-testid="GridViewIcon"]').click();
    cy.get('.MuiInputBase-input').clear('re');
    cy.get('.MuiInputBase-input').type('regression');
    cy.get('.MuiCardContent-root').click(); 
  });
});
