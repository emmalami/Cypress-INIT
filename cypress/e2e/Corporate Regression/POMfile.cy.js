/// <reference types="cypress" />

        import loginPage from '../Pages/loginPage';

describe('User Management', () => {
  it('Login using POM structure', () => {
    const username = 'olamide.john@interswitchng.com';
    const password = 'Testqa1101!@#$%^';

    loginPage.visit("");
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    
  });
});