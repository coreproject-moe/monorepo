
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-settings', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-settings></coreproject-shape-settings>'
        );

        const element = await page.find('coreproject-shape-settings');
        expect(element).toHaveClass('hydrated');
    });
});
    