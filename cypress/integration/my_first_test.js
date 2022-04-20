/// <reference types ="cypress"/>


  it('WWE', function() {
    cy.viewport(1600, 1000)
  
    cy.visit('https://wwechampions.com/')
    cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)').click()
    cy.get('.scopely-login').click()
    cy.get('#input28').type('hripsime.barbaryan@inomma.com')
    cy.get('#input36').type('Hrips123{enter}')
    cy.wait(12000)
    cy.get('.account-profile__account-settings__button >').click({force: true})
    cy.get('[data-id="account_settings_Change Avatar"]').click()
    cy.get('circle').click({force: true})
    cy.get('.account-profile__account-settings__button > svg').click()
    cy.get('[data-id="account_settings_Logout"]').click()
  })