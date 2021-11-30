/// <reference types="cypress"/>

describe('input list name', () => {

  beforeEach(() => {
    cy.visit('http://192.168.1.13:3000')
  })

  // it('should display list input bar', () => {
  //   cy.findByRole('button', /add list/i)  
  //     .click()
  //   cy.findByPlaceholderText(/add list name/i)
  //     .should('be.visible')
  //   cy.findByRole('button', /\+/i)
  //     .should('be.visible')
  // })

  it('should display inputed list', () => {
    const listTitle = 'List Title 1'
    // cy.findByRole('button', /add list/i)  
    //   .click()
    cy.findByPlaceholderText(/add list name/i)
      .type(listTitle)
    cy.findByPlaceholderText(/add list name/i)
      .parent()
      .findByRole('button', { name: /\+/i })
      .click()
    cy.contains(listTitle)
  })

  it('should delete list item', () => {
    const listTitle = 'List Title 0'
    cy.contains(listTitle)
      .parent()
      .findByRole('button')
      .click()
    cy.contains(listTitle)
      .should('not.exist')
  })

  context('card test', () => {
    it('display card', () => {
      cy.contains(/card/i)
    })
  })

})