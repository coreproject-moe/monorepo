
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevrons-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-chevrons-up></coreproject-shape-chevrons-up>'
        );

        const element = await page.find('coreproject-shape-chevrons-up');
        expect(element).toHaveClass('hydrated');
    });
});
    