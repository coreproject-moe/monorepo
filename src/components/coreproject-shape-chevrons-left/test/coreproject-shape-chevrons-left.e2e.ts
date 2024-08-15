
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevrons-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-chevrons-left></coreproject-shape-chevrons-left>'
        );

        const element = await page.find('coreproject-shape-chevrons-left');
        expect(element).toHaveClass('hydrated');
    });
});
    