
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-volume', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-volume></coreproject-shape-volume>'
        );

        const element = await page.find('coreproject-shape-volume');
        expect(element).toHaveClass('hydrated');
    });
});
    