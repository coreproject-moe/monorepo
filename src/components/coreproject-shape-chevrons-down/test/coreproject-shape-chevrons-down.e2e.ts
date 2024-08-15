
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevrons-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-chevrons-down></coreproject-shape-chevrons-down>'
        );

        const element = await page.find('coreproject-shape-chevrons-down');
        expect(element).toHaveClass('hydrated');
    });
});
    