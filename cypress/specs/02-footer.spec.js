import {Footer} from "../component-objects/footer";
let footer = new Footer();

describe('Footer test suite', () => {

	before(() => {
		cy.visit('/');
	})

	// TODO rename
	it('try', () => {
		footer.search('demo')
		cy.wait(3000)
		// expect(false).to.equal(true)
	})
})
