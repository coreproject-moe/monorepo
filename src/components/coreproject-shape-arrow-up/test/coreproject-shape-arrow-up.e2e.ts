
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow-up></coreproject-shape-arrow-up>'
        );

        const element = await page.find('coreproject-shape-arrow-up');
        expect(element).toHaveClass('hydrated');
    });
});
    