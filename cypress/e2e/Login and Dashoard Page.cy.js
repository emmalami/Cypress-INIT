describe('Admin Login page', () => {
  it('login', () => {
    cy.visit('https://dps-admin-ui.qa.interswitchng.com/')
    cy.get('input[type="email"]').type('olamide.john@interswitchng.com');
    cy.get('.MuiInputBase-root.css-1mbvqtf').find('input[type="password"]').type('Testqa1101!@#$%^');
    cy.get('button[type="submit"]').click();
  })
})