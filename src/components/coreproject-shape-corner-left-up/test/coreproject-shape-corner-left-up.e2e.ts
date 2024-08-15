
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-left-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-left-up></coreproject-shape-corner-left-up>'
        );

        const element = await page.find('coreproject-shape-corner-left-up');
        expect(element).toHaveClass('hydrated');
    });
});
    