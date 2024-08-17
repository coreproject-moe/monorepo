
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-plus-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-plus-circle></coreproject-shape-plus-circle>'
        );

        const element = await page.find('coreproject-shape-plus-circle');
        expect(element).toHaveClass('hydrated');
    });
});
    