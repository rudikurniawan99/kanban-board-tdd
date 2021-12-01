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
      .should('exist')
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
    it('add card to a list', () => {
      const cardTitle = 'card 1'
      const btn = cy.findByRole('heading', { name: /list title 0/i })
        .parents('.p-4')
      btn.findByRole('button', { name: /add card/i })
        .click()
      btn.get('input:last')
        .type(cardTitle)
      btn.get('input:last')
        .parent()
        .findByRole('button', { name: /\+/i })
        .click()
      cy.contains(cardTitle)
        .should('exist')

    })
  })

})