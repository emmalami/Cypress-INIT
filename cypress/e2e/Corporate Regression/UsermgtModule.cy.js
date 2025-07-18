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