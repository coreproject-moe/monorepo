
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-lock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-lock></coreproject-shape-lock>'
        );

        const element = await page.find('coreproject-shape-lock');
        expect(element).toHaveClass('hydrated');
    });
});
    