
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-zoom-out', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-zoom-out></coreproject-shape-zoom-out>'
        );

        const element = await page.find('coreproject-shape-zoom-out');
        expect(element).toHaveClass('hydrated');
    });
});
    