
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-share', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-share></coreproject-shape-share>'
        );

        const element = await page.find('coreproject-shape-share');
        expect(element).toHaveClass('hydrated');
    });
});
    