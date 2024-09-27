describe('index is loaded correctly (debugging)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  })
})

describe('Project Setup correctly', ()=> {
  it('Check that list is displayed', ()=> {
    // open the page.
    cy.visit('http://localhost:8080')

    // get and test the elements

    // click the show resources button
    cy.get('#show-resources').click()

    // check that the list is displayed
    cy.get('.javascript-resources').should('not.have.class', 'd-none')
  })

  it('check if bold is added on mouse over', ()=> {

    // open the page.
    cy.visit('http://localhost:8080')

    // click the show resources button
    cy.get('#show-resources').click()

    // trigger the mouse over event on the first element
    cy.get('.javascript-resources')
      .children()
      .first()
      .trigger('mouseover')

    // check if the bold class is added to the first element
    cy.get('.javascript-resources')
      .children()
      .first()
      .should('have.class', 'fw-bold')
  })


  it('check if bold is removed on mouse out', ()=> {
    cy.visit('http://localhost:8080')

    // click the show resources button
    cy.get('#show-resources').click()

    // trigger the mouse over event on the first element
    cy.get('.javascript-resources')
      .children()
      .first()
      .trigger('mouseover')
    
    // trigger the mouse out event over the first element
    cy.get('.javascript-resources')
      .children()
      .first()
      .trigger('mouseout')

    // trigger the mouse over event on the second element
    cy.get('.javascript-resources')
      .children()
      .eq(1)
      .trigger('mouseover')

    // check if bold is removed from the first element
    cy.get('.javascript-resources')
      .children()
      .first()
      .should('not.have.class', 'fw-bold')

    // check if the bold class is added to the first element
    cy.get('.javascript-resources')
      .children()
      .eq(1)
      .should('have.class', 'fw-bold')
  })

  it('check if italic is added on click', ()=> {
    cy.visit('http://localhost:8080')

    // click the show resources button
    cy.get('#show-resources').click()

    // trigger the mouse over event on the first element
    cy.get('.javascript-resources')
      .children()
      .eq(3)
      .trigger('click')

    // check if the bold class is added to the first element
    cy.get('.javascript-resources')
      .children()
      .eq(3)
      .should('have.class', 'fst-italic')
  })
})
