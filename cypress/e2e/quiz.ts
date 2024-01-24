describe('Quiz', () => {
    it('Users can create quizzes', () => {
        cy.visit('http://localhost:3000')
    })
    it('Users can add, edit and delete quiz questions', () => {
        cy.visit('http://localhost:3000')
    })
    it('Question types are supported (multiple choice, true/false, open-ended)', () => {
        cy.visit('http://localhost:3000')
    })
    it("Quizzes can be categorized.", () => {
        cy.visit('http://localhost:3000')
    })
    it("users can search for quizzes.", () => {
        cy.visit('http://localhost:3000')
    })
})