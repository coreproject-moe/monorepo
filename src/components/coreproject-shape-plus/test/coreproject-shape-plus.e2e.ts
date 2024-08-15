
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-plus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-plus></coreproject-shape-plus>'
        );

        const element = await page.find('coreproject-shape-plus');
        expect(element).toHaveClass('hydrated');
    });
});
    