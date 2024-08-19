
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-meh', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-meh></coreproject-shape-meh>'
        );

        const element = await page.find('coreproject-shape-meh');
        expect(element).toHaveClass('hydrated');
    });
});
    