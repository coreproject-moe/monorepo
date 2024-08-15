
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-delete', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-delete></coreproject-shape-delete>'
        );

        const element = await page.find('coreproject-shape-delete');
        expect(element).toHaveClass('hydrated');
    });
});
    