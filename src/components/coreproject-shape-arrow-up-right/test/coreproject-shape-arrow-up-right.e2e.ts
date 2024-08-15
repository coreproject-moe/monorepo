
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-up-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow-up-right></coreproject-shape-arrow-up-right>'
        );

        const element = await page.find('coreproject-shape-arrow-up-right');
        expect(element).toHaveClass('hydrated');
    });
});
    