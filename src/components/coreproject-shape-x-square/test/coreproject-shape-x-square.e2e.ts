
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-x-square', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-x-square></coreproject-shape-x-square>'
        );

        const element = await page.find('coreproject-shape-x-square');
        expect(element).toHaveClass('hydrated');
    });
});
    