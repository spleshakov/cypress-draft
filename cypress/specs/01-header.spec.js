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

		// TODO in case of how I structured the files now,
		//  I should continue storing locators on the component level (as example above content._slidesBanner)
		//  but I also want to demo the use of aliases
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

		cy.get(content._slidesBanner)
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
