
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-copy', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-copy></coreproject-shape-copy>'
        );

        const element = await page.find('coreproject-shape-copy');
        expect(element).toHaveClass('hydrated');
    });
});
    