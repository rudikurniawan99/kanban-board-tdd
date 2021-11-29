/// <reference types="cypress"/>

describe('input list name', () => {

  beforeEach(() => {
    cy.visit('http://192.168.1.13:3000')
  })

  it('check input bar', () => {
    cy.findByRole('button', { name: /add list/i })
      .click()
    cy.findByRole('textbox')
      .type('list 1')
    cy.findByRole('button', { name: /\+/i })
      .click()
  })
  

})