/**
 * WordPress dependencies
 */
import { createNewPost, changeSiteTimezone } from '@wordpress/e2e-test-utils';

async function getPublishButtonText() {
	return page.$eval(
		'.editor-post-publish-button__button',
		( element ) => element.textContent
	);
}

describe( 'Scheduling', () => {
	const isDateTimeComponentFocused = () => {
		return page.evaluate( () => {
			const dateTimeElement = document.querySelector(
				'.components-datetime__date'
			);
			if ( ! dateTimeElement || ! document.activeElement ) {
				return false;
			}
			return dateTimeElement.contains( document.activeElement );
		} );
	};

	// @todo: Change `UTC+1` back to `UTC` once the core regressions is resolved.
	// See: https://github.com/WordPress/gutenberg/pull/54806#issuecomment-1734840171.
	describe.each( [ [ 'UTC-10' ], [ 'UTC+1' ], [ 'UTC+10' ] ] )(
		`Timezone %s`,
		( timezone ) => {
			let oldTimezone;
			beforeEach( async () => {
				oldTimezone = await changeSiteTimezone( timezone );
				await createNewPost();
			} );
			afterEach( async () => {
				await changeSiteTimezone( oldTimezone );
			} );

			it( `should change publishing button text from "Publish" to "Schedule"`, async () => {
				expect( await getPublishButtonText() ).toBe( 'Publish' );

				// Open the datepicker.
				await page.click( '*[aria-label^="Change date"]' );

				// Change the publishing date to a year in the future.
				await page.click( '.components-datetime__time-field-year' );
				await page.keyboard.press( 'ArrowUp' );

				// Close the datepicker.
				await page.click( '.edit-post-post-schedule__toggle' );

				expect( await getPublishButtonText() ).toBe( 'Schedule…' );
			} );
		}
	);

	it( 'Should keep date time UI focused when the previous and next month buttons are clicked', async () => {
		await createNewPost();

		await page.click( '*[aria-label^="Change date"]' );
		await page.click( '*[aria-label="View previous month"]' );
		expect( await isDateTimeComponentFocused() ).toBe( true );
		await page.click( '*[aria-label="View next month"]' );
		expect( await isDateTimeComponentFocused() ).toBe( true );
	} );
} );
