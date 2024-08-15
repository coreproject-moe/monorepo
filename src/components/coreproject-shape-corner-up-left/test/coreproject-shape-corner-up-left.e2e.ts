
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-up-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-up-left></coreproject-shape-corner-up-left>'
        );

        const element = await page.find('coreproject-shape-corner-up-left');
        expect(element).toHaveClass('hydrated');
    });
});
    