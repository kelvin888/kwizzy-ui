describe('Onboarding', () => {
    it('Users can sign up', () => {
      cy.visit('http://localhost:3000')
    })
  })
  
  describe('Authentication', () => {
    it('Users can login', () => {
      cy.visit('http://localhost:3000')
    })
    it('Users can logout', () => {
        cy.visit('http://localhost:3000')
      })
      it('Users can reset their passwords', () => {
        cy.visit('http://localhost:3000')
      })
  })
  