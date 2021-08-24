import {Header} from "../component-objects/header";

describe('My First Test', () => {
	it('Pass!', async () => {
		cy.visit('/');
		let header = new Header();
		// Header
		header.navigateTo('Resource Center', 'Blog')
		cy.wait(5000)

		header.navigateTo('Contact Us')
		cy.wait(5000)

		header.goHome()
		cy.wait(5000)

		expect(true).to.equal(true)
	})
})
