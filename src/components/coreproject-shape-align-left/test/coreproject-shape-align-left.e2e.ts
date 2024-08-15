
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-align-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-align-left></coreproject-shape-align-left>'
        );

        const element = await page.find('coreproject-shape-align-left');
        expect(element).toHaveClass('hydrated');
    });
});
    