
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-toggle-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-toggle-right></coreproject-shape-toggle-right>'
        );

        const element = await page.find('coreproject-shape-toggle-right');
        expect(element).toHaveClass('hydrated');
    });
});
    