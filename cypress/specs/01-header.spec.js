import {Header} from '../component-objects/header';
import {Content} from "../component-objects/content";

let header = new Header();
let content = new Content();

describe('Header test suite', () => {

	before(() => {
		cy.visit('/');
	})

	it('Navigation: About Us -> Who We Are', () => {
		cy.get(content._slidesBanner)
			.should(
				'exist'
			)

		header.navigateTo('About Us', 'Who We Are');

		cy.get(content._slidesBanner)
			.should(
				'not.exist'
			)

		cy.get(content._pageHeader)
			.should(
				'have.text',
				'Who We Are'
			)
	})

	it('Navigation: Contact Us', () => {

		header.navigateTo('Contact Us');

		cy.get(content._pageHeader)
			.should(
				'have.text',
				'Contact Us'
			)
	})

	it('Navigation: home page redirection by AristaMD logo', () => {

		header.goHome();

		cy.get(content._slidesBanner)
			.should(
				'exist'
			)
	})

	it('Request Demo button', () => {

		header.requestDemo();

		cy.get(content._pageHeader)
			.should(
				'have.text',
				'Request an eConsult Demo'
			)
	})
})
