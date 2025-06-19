describe('Admin Login', () => {
  it('login', () => {
    cy.visit('https://dps-admin-ui.qa.interswitchng.com/')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click('olamide.john@interswitchng.com');
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click('Testqa1101!@#$%^')
  })
})