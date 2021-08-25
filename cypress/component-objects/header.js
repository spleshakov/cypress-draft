/**
 * Header component object for all related manipulations
 */
export class Header {

	/**
	 * Initiate locators in one place for reusability
	 */
	constructor() {
		this._menu = menuLabel => `#menu-primary-top-navigation > li > a:contains(${menuLabel})`;
		this._submenu = (menuLabel, submenuLabel) => `#menu-primary-top-navigation > li > a:contains(${menuLabel}) + ul a:contains(${submenuLabel})`;
		this._homeLogo = 'img[src*="aristamd-logo"]';
		this._requestDemo = '.et_pb_sticky_module a[href="/request-demo/"]';
	}

	/**
	 * Navigate to a site tab
	 * Just clicks the menu tab, if submenu is not specified
	 * @param menuLabel
	 * @param submenuLabel
	 */
	navigateTo(menuLabel, submenuLabel) {

		if (!menuLabel) throw new Error('Missing menuLabel argument in navigateTo function')

		if (!!submenuLabel) {
			cy.get(this._menu(menuLabel)).trigger('mouseover');
			cy.get(this._submenu(menuLabel, submenuLabel)).click();
		} else {
			cy.get(this._menu(menuLabel)).click();
		}
	}

	/**
	 * Click AristaMD Logo
	 */
	goHome() {
		cy.get(this._homeLogo).filter(':visible').click();
	}

	/**
	 * click request demo
	 */
	requestDemo() {
		cy.get(this._requestDemo).filter(':visible').click();
	}
}
