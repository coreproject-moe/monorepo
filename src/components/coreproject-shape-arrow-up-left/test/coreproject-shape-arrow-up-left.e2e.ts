
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-up-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow-up-left></coreproject-shape-arrow-up-left>'
        );

        const element = await page.find('coreproject-shape-arrow-up-left');
        expect(element).toHaveClass('hydrated');
    });
});
    