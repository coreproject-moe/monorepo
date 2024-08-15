
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-book-open', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-book-open></coreproject-shape-book-open>'
        );

        const element = await page.find('coreproject-shape-book-open');
        expect(element).toHaveClass('hydrated');
    });
});
    