// cypress/e2e/orangehrm/loginTest.cy.js
import LoginPage from 'C:\Users\olamide.john\Documents\Cypress INIT\cypress\e2e\Pages'

describe('Admin Corporate - POM', () => {
  it('Login using POM structure', () => {
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
    LoginPage.verifyDashboardVisible(); // Optional verification
  });
});
