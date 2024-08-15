
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-plus-square', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-plus-square></coreproject-shape-plus-square>'
        );

        const element = await page.find('coreproject-shape-plus-square');
        expect(element).toHaveClass('hydrated');
    });
});
    