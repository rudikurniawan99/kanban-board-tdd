/// <reference types="cypress"/>

describe('input list name', () => {

  beforeEach(() => {
    cy.visit('http://192.168.1.13:3000')
  })

  it('should display list input bar', () => {
    cy.findByRole('button', /add list/i)  
      .click()
    cy.findByPlaceholderText(/add list name/i)
      .should('be.visible')
    cy.findByRole('button', /\+/i)
      .should('be.visible')
  })

  it('should display inputed list', () => {
    const listTitle = 'List Title 1'
    cy.findByRole('button', /add list/i)  
      .click()
    cy.findByPlaceholderText(/add list name/i)
      .type(listTitle)
    cy.findByRole('button', /\+/i)
      .click()
    cy.contains(listTitle)
  })

})