
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-zoom-in', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-zoom-in></coreproject-shape-zoom-in>'
        );

        const element = await page.find('coreproject-shape-zoom-in');
        expect(element).toHaveClass('hydrated');
    });
});
    