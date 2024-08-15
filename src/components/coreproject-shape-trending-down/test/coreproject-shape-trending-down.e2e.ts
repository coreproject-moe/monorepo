
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-trending-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-trending-down></coreproject-shape-trending-down>'
        );

        const element = await page.find('coreproject-shape-trending-down');
        expect(element).toHaveClass('hydrated');
    });
});
    