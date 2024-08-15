
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-down-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-down-right></coreproject-shape-corner-down-right>'
        );

        const element = await page.find('coreproject-shape-corner-down-right');
        expect(element).toHaveClass('hydrated');
    });
});
    