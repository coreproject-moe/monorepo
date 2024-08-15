
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-share-2', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-share-2></coreproject-shape-share-2>'
        );

        const element = await page.find('coreproject-shape-share-2');
        expect(element).toHaveClass('hydrated');
    });
});
    