
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-trending-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-trending-up></coreproject-shape-trending-up>'
        );

        const element = await page.find('coreproject-shape-trending-up');
        expect(element).toHaveClass('hydrated');
    });
});
    