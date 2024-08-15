
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-book', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-book></coreproject-shape-book>'
        );

        const element = await page.find('coreproject-shape-book');
        expect(element).toHaveClass('hydrated');
    });
});
    