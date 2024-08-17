
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-file-minus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-file-minus></coreproject-shape-file-minus>'
        );

        const element = await page.find('coreproject-shape-file-minus');
        expect(element).toHaveClass('hydrated');
    });
});
    