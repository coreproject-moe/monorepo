
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-folder-minus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-folder-minus></coreproject-shape-folder-minus>'
        );

        const element = await page.find('coreproject-shape-folder-minus');
        expect(element).toHaveClass('hydrated');
    });
});
    