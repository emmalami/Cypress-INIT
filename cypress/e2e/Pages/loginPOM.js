// cypress/pages/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('https://dps-admin-ui.k8.isw.la');
  }

  enterUsername(username) {
    cy.get('[name="username"]').type("olamide.john@interswitchng.com");
  }

  enterPassword(password) {
    cy.get('[name="password"]').type("Testqa1101!@#$%^");
  }

  clickLogin() {
    cy.get('[type="submit"]').click();
  }

  verifyDashboardVisible() {
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible');
  }
}

export default new LoginPage();
