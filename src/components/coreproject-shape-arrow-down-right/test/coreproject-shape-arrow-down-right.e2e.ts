
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-down-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow-down-right></coreproject-shape-arrow-down-right>'
        );

        const element = await page.find('coreproject-shape-arrow-down-right');
        expect(element).toHaveClass('hydrated');
    });
});
    