
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-align-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-align-right></coreproject-shape-align-right>'
        );

        const element = await page.find('coreproject-shape-align-right');
        expect(element).toHaveClass('hydrated');
    });
});
    