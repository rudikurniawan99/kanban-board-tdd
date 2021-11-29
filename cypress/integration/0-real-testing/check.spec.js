/// <reference types="cypress"/>

describe('check testing ', () => {

  beforeEach(() => {
    cy.visit('http://192.168.1.13:3000')
  })

  it('testing title', () => {
    cy.findByRole('heading', { name: /kanban board/i })
      .should('exist')
  })

  it('check create list button', () => {
    cy.findByRole('button', /add list/i)
      .should('exist')
      .and('have.text', 'Add List')
  })

})