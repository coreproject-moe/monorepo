
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevron-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-chevron-left></coreproject-shape-chevron-left>'
        );

        const element = await page.find('coreproject-shape-chevron-left');
        expect(element).toHaveClass('hydrated');
    });
});
    