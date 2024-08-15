
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-right-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-right-down></coreproject-shape-corner-right-down>'
        );

        const element = await page.find('coreproject-shape-corner-right-down');
        expect(element).toHaveClass('hydrated');
    });
});
    