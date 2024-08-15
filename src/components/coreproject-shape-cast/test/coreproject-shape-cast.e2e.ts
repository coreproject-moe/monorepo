
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-cast', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-cast></coreproject-shape-cast>'
        );

        const element = await page.find('coreproject-shape-cast');
        expect(element).toHaveClass('hydrated');
    });
});
    