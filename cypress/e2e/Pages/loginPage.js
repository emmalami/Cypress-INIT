// cypress/e2e/Pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('https://dps-admin-ui.k8.isw.la');
  }

  enterUsername(username) {
    cy.get('input[type="email"]').type(username);
    
  }

  enterPassword(password) {
    cy.get('.MuiInputBase-root.css-1mbvqtf').find('input[type="password"]').type(password);
  }

  clickLogin() {
      cy.get('button[type="submit"]').click();
  }

}

export default new LoginPage();
