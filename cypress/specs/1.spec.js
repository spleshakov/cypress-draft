
class Header {
	constructor() {
		this._menu = menuLabel => `#menu-primary-top-navigation > li > a:contains(${menuLabel})`;
		this._submenu = (menuLabel, submenuLabel) => `#menu-primary-top-navigation > li > a:contains(${menuLabel}) + ul a:contains(${submenuLabel})`;
	}

	navigateTo(menuLabel, submenuLabel) {

		if (!menuLabel) throw new Error ('Missing menuLabel argument in navigateTo function')

		if (!!submenuLabel) {
			cy.get(this._menu(menuLabel)).trigger('mouseover');
			cy.get(this._submenu(menuLabel, submenuLabel)).click();
		} else {
			cy.get(this._menu(menuLabel)).click();
		}
	}
}

describe('My First Test', () => {
	it('Pass!', async () => {
		cy.visit('/');
		let header = new Header();
		// Header
		header.navigateTo('Resource Center', 'Blog')
		cy.wait(5000)
		header.navigateTo('Contact Us')
		cy.wait(5000)

		expect(true).to.equal(true)
	})
})
