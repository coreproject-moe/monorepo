
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-arrow></coreproject-shape-arrow>'
        );

        const element = await page.find('coreproject-shape-arrow');
        expect(element).toHaveClass('hydrated');
    });
});
    