import {Header} from "../component-objects/header";
let header = new Header();

describe('Header test suite', () => {

	before(() => {
		cy.visit('/');
	})

	it('Navigation: About Us -> Who We Are', () => {
		cy.get('.et_pb_slides')
			.should(
				'exist'
			)

		header.navigateTo('About Us', 'Who We Are');

		cy.get('.et_pb_slides')
			.should(
				'not.exist'
			)

		cy.get('.header-content h1')
			.as('pageHeader')
			.should(
				'have.text',
				'Who We Are'
			)
	})

	it('Navigation: Contact Us', () => {

		header.navigateTo('Contact Us');

		cy.get('@pageHeader')
			.should(
				'have.text',
				'Contact Us'
			)
	})

	it('Navigation: home page redirection by AristaMD logo', () => {

		header.goHome();

		cy.get('.et_pb_slides')
			.should(
				'exist'
			)
	})

	it('Request Demo button', () => {

		header.navigateTo('Request Demo');

		cy.get('@pageHeader')
			.should(
				'have.text',
				'Request an eConsult Demo'
			)
	})
})
