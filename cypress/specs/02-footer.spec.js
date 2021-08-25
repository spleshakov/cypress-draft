import {Footer} from '../component-objects/footer';

let footer = new Footer();

describe('Footer test suite', () => {

	before(() => {
		cy.visit('/');
	})

	it('Key elements are present', () => {
		// aristaMD footer logo
		cy.get(footer._aristaMDLogo)
			.should(
				'exist'
			)

		cy.get(footer._ourSolutions)
			.should(
				'exist'
			)

		cy.get(footer._company)
			.should(
				'exist'
			)

		cy.get(footer._resources)
			.should(
				'exist'
			)
	})

	it('Search functionality is as expected', () => {
		let searchString = 'demo'
		footer.search(searchString)
		cy.get('#main-content .et_pb_text_0_tb_body .et_pb_text_inner')
			.should(
				'have.text',
				`Search Results for "${searchString}"`
			)
	})
})
