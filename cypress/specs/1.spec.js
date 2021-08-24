describe('My First Test', () => {
	it('Pass!', () => {
		cy.visit('/');
		expect(true).to.equal(true)
	})
})
