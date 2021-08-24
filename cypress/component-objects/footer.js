/**
 * Footer component object
 */
export class Footer {

	/**
	 * Initiate locators in one place for reusability
	 */
	constructor() {
		this._searchInput = '[role="search"] [type="text"]';
		this._searchButton = '[role="search"] [type="submit"]'
	}

	/**
	 * Type what to search for and submit your query
	 * @param {String} [searchString='']
	 */
	// TODO I shouldn't default this argument, but rather validate it's always passed and is type of string
	search(searchString = '') {
		cy.get(this._searchInput).scrollTo('center', {ensureScrollable: false});
		cy.get(this._searchInput).type(searchString);
		cy.get(this._searchButton).click();
	}
}
