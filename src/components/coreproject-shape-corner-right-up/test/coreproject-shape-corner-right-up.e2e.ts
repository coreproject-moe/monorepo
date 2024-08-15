
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-right-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-right-up></coreproject-shape-corner-right-up>'
        );

        const element = await page.find('coreproject-shape-corner-right-up');
        expect(element).toHaveClass('hydrated');
    });
});
    