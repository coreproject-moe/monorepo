
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-up-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-up-right></coreproject-shape-corner-up-right>'
        );

        const element = await page.find('coreproject-shape-corner-up-right');
        expect(element).toHaveClass('hydrated');
    });
});
    