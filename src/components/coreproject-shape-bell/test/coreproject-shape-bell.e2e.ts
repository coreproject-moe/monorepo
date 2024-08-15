
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-bell', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-bell></coreproject-shape-bell>'
        );

        const element = await page.find('coreproject-shape-bell');
        expect(element).toHaveClass('hydrated');
    });
});
    