
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevrons-right', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-chevrons-right></coreproject-shape-chevrons-right>'
        );

        const element = await page.find('coreproject-shape-chevrons-right');
        expect(element).toHaveClass('hydrated');
    });
});
    