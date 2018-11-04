describe('Tour of Heroes', function() {
  it('Should redirect to dashboard', function() {
    cy.visit('http://localhost:4200')

    cy.url().should('include', '/dashboard')
  })

  it('Should list heroes', function() {
    cy.visit('http://localhost:4200')

    cy.contains('a', 'Heroes').click()

    cy.url().should('include', '/heroes')
  })

  it('Should add hero', function(){
    cy.visit('http://localhost:4200/heroes')

    cy.get('input').type('Pamela')

    cy.contains('button', 'add').click()

    cy.contains('Pamela')
  })

  it('Should edit hero', function(){
    cy.visit('http://localhost:4200/heroes')

    cy.contains('Narco').click()

    cy.get('input').type('X')

    cy.contains('button', 'save').click()

    cy.contains('NarcoX')
  })

  it.only('Should delete hero', function(){
    cy.visit('http://localhost:4200/heroes')

    cy.get('body > app-root > app-heroes > ul > li:nth-child(2) > button').click()

    cy.contains('Narco')
  })
})
