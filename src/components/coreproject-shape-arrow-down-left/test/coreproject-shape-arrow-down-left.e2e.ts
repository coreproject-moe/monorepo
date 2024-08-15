
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-down-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow-down-left></coreproject-shape-arrow-down-left>'
        );

        const element = await page.find('coreproject-shape-arrow-down-left');
        expect(element).toHaveClass('hydrated');
    });
});
    