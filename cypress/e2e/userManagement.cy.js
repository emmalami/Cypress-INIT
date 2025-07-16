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
    cy.get('.fix__menu__list > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('.search__grid > .MuiButtonBase-root').click();
    cy.get(':nth-child(2) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').clear('O');
    cy.get(':nth-child(2) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').type('Olamide');
    cy.get(':nth-child(3) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').clear('j');
    cy.get(':nth-child(3) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').type('john');
    cy.get(':nth-child(4) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').clear('o');
    cy.get(':nth-child(4) > .MuiFormGroup-root > .MuiInputBase-root > .MuiInputBase-input').type('test695@interswitchng.com');
    cy.get('.css-8mmkcg').click();
    cy.get('#react-select-2-option-0').click();
    cy.get('.MuiButton-contained').click();
    cy.contains('button', 'Submit',{timeout:30000}).click({ force: true })
    cy.get('[data-testid="PlayCircleFilledWhiteIcon"]',{timeout:30000}).eq(1).click({ force: true })
    cy.get('.MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
    cy.get('.MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
  });/*
  it('Edit Profile', () => {
    cy.get('[data-testid="GridViewIcon"]').click();
    cy.get('.MuiInputBase-input').clear('re');
    cy.get('.MuiInputBase-input').type('regression');
    cy.get('.MuiCardContent-root').click();*/

});
import LandingPage from "../e2e/Pages/LandingPage";
import LandingPage from "../e2e/Pages/LoginPage";

/// <reference types="Cypress" />

describe('Ecommerce Website', () => {
    beforeEach(() => {
      // Visit the website before each test
      
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.wait
    });
    it('SignUp', () => {    
          cy.get('[name="username"]').type('Admin');
          cy.get('[name="password"]').type('admin123');
          cy.get('[type="submit"]').click();
          cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').select('ESS');
          cy.get('button[type="submit"]').click()
         
    });
});
