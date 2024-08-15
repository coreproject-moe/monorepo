
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-left-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-corner-left-down></coreproject-shape-corner-left-down>'
        );

        const element = await page.find('coreproject-shape-corner-left-down');
        expect(element).toHaveClass('hydrated');
    });
});
    